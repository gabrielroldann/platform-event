/*
  Warnings:

  - You are about to drop the column `eventId` on the `AcademicWork` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AcademicWork" DROP CONSTRAINT "AcademicWork_eventId_fkey";

-- AlterTable
ALTER TABLE "AcademicWork" DROP COLUMN "eventId",
ADD COLUMN     "image" TEXT,
ALTER COLUMN "description" DROP NOT NULL;
