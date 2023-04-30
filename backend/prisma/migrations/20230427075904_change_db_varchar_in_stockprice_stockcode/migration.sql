/*
  Warnings:

  - You are about to alter the column `stock_code` on the `stock_price` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(8)`.

*/
-- DropForeignKey
ALTER TABLE `stock_price` DROP FOREIGN KEY `stock_price_stock_code_fkey`;

-- AlterTable
ALTER TABLE `stock_price` MODIFY `stock_code` VARCHAR(8) NOT NULL;

-- AddForeignKey
ALTER TABLE `stock_price` ADD CONSTRAINT `stock_price_stock_code_fkey` FOREIGN KEY (`stock_code`) REFERENCES `stock`(`stock_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
