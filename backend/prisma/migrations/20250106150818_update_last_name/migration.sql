/*
  Warnings:

  - You are about to drop the column `lasName` on the `supplier` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `supplier` DROP COLUMN `lasName`,
    ADD COLUMN `lastName` VARCHAR(191) NULL;
