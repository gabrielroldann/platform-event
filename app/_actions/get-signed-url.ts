"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { db } from "../_lib/prisma";

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const acceptedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/mp4",
  "image/webm",
];

const maxFileSize = 10 * 1024 * 1024;

export const getSignedURL = async (
  type: string,
  size: number,
  checksum: string
) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { error: "You must be signed in to upload a file" };
  }

  if (!acceptedTypes.includes(type)) {
    return { error: "File type not accepted" };
  }

  if (size > maxFileSize) {
    return { error: "File size too large" };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
  });

  const signedUrl = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 });
  const url = signedUrl.split("?")[0];

  const newImage = await db.image.create({
    data: {
      url: url,
    },
  });

  return { success: { url: signedUrl, newImageId: newImage.id } };
};
