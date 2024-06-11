/*
  Warnings:

  - You are about to drop the column `typeUserId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `TypeUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_typeUserId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "typeUserId",
ADD COLUMN     "typeUser" TEXT;

-- DropTable
DROP TABLE "TypeUser";
