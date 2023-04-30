-- CreateTable
CREATE TABLE `stock` (
    `stock_code` VARCHAR(8) NOT NULL,
    `stock_name` VARCHAR(45) NOT NULL,
    `exchange` ENUM('KOSPI', 'KOSDAQ') NOT NULL,

    UNIQUE INDEX `stock_stock_code_key`(`stock_code`),
    UNIQUE INDEX `stock_stock_name_key`(`stock_name`),
    INDEX `stock_stock_code_stock_name_idx`(`stock_code`, `stock_name`),
    PRIMARY KEY (`stock_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock_price` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stock_code` VARCHAR(191) NOT NULL,
    `date` VARCHAR(8) NOT NULL,
    `open` INTEGER NOT NULL,
    `close` INTEGER NOT NULL,
    `high` INTEGER NOT NULL,
    `low` INTEGER NOT NULL,
    `volume` INTEGER NOT NULL,

    INDEX `stock_price_stock_code_date_idx`(`stock_code`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `news` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stock_code` VARCHAR(191) NOT NULL,
    `label` ENUM('10', '20', '30') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stock_price` ADD CONSTRAINT `stock_price_stock_code_fkey` FOREIGN KEY (`stock_code`) REFERENCES `stock`(`stock_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `news` ADD CONSTRAINT `news_stock_code_fkey` FOREIGN KEY (`stock_code`) REFERENCES `stock`(`stock_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
