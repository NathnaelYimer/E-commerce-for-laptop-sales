/*
  Warnings:

  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customer_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `customer_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `cart`;

-- CreateIndex
CREATE INDEX `customer_id` ON `orders`(`customer_id`);
