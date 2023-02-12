-- CreateTable
CREATE TABLE `items_in_cart` (
    `cart_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `num_of_item` INTEGER NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`cart_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
