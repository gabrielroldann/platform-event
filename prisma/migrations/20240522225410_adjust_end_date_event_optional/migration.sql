/*
  Warnings:

  - You are about to drop the column `maxParticipants` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "maxParticipants",
ALTER COLUMN "endDate" DROP NOT NULL;
