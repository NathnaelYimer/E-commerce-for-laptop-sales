/*
  Warnings:

  - The primary key for the `items_in_cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `current_in_id` to the `items_in_cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `items_in_cart` DROP PRIMARY KEY,
    ADD COLUMN `current_in_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`current_in_id`);
