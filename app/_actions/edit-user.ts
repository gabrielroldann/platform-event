"use server";

import { db } from "../_lib/prisma";

interface EditNameProps {
  email: string;
  newName: string;
}

interface EditEmailProps {
  email: string;
  newEmail: string;
}

export const EditName = async ({ email, newName }: EditNameProps) => {
  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      name: newName,
    },
  });

  return updatedUser;
};

export const EditEmail = async ({ email, newEmail }: EditEmailProps) => {
  // TODO: UPDATE ACADEMIC WORKS

  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      email: newEmail,
    },
  });

  return updatedUser;
};
