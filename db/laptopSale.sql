-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 13, 2023 at 01:33 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laptop_sale`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `admin_username_key` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--
-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`),
  KEY `customer_id` (`customer_id`),
  KEY `order_id` (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart`
--
-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `hashedRt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
---- --------------------------------------------------------

--
-- Table structure for table `items_in_cart`
--

DROP TABLE IF EXISTS `items_in_cart`;
CREATE TABLE IF NOT EXISTS `items_in_cart` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `num_of_item` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `current_in_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`current_in_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items_in_cart`
--
-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `customer_id` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO products (name,description,image_url,price)  values ("HP Pavilion 15 Laptop,11th Gen", "Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage <br>
              Full HD IPS micro-edge Display, Windows 11 Pro, Compact Design 
              Long Battery Life (15-eg0025nr, 2021)</h5>", " img/hp2.jpg", "90,000 birr"),("Razer Blade 14 Gaming Laptop",' AMD Ryzen 9 5900HX 8 Core, NVIDIA GeForce RTX 3080, 14" QHD 165Hz<br>
              16GB RAM, 1TB SSD - CNC Aluminum - Chroma RGB 
              THX Spatial Audio - Vapor Chamber Cooling', " img/razer.jpg", " 150,000 birr"),('Dell Latitude 5000 5530 15.6"', 'Notebook - Full HD - 1920 x 1080 - Intel Core i7 12th Gen i7-1255U <br>
              Deca-core (10 Core) 1.70 GHz - 16 GB Total RAM - 256 GB SSD - Gray <br>
              15.6" display with 1920 x 1080 resolution showcases movies, games and photos with impressive clarity', "  img/dell-laptop-deal.jpg ", "150,000 birr");



INSERT INTO products (name,description,image_url,price)  values("Thinkpad X1 Nano Gen 2 Intel(13 inch)", '12th Generation Intel® Core™ i5-1240P Processor (E-cores up to
                3.30 GHz P-cores up to 4.40 GHz) 13" 2K (2160 x 1350), IPS,Anti-Glare, Non-touch, 100% sRGB, 450 nits, 60Hz 1080P FHD RGB with ThinkShutter Fingerprint Reader 
                Intel® Wi-Fi 6E AX211 2x2 AX vPro® & Bluetooth® 5.1 or above', "img/lenovo.jpg ", "90,000 birr"),
            ("Dell Chromebook 11 3189 11.6 Intel Celeron", " Multitasking is easy with 4 GB of RAM 
              16GB Storage allows for plenty storage for many applications 
              Equipped with a blazing fast, Intel Celeron 1.60 GHz processor  ", " img/dell.jpg ",
               " 40,000 birr  "),("Apple 2020 MacBook Air Laptop", ' 3” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard
FaceTime HD Camera, Touch ID. Works with iPhone/iPad  Space Gray', 'img/apple.jpg' , "120,000 birr ")

INSERT INTO products (name,description,image_url,price)  values("ASUS TUF Gaming F15 Gaming Laptop", ' 15.6" 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor <br> 
              GTX 1650 DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51', " img /asus.jpg  ", "80,000 birr"),("HP 2022 Envy Laptop 17.3", "FHD IPS Touchscreen 10-Core 12th Intel i7-1255U <br>
              Xe Graphics 64GB DDR4 2TB NVMe SSD WiFi 6E HDMI
              Thunderbolt4 Backlit KB Fingerprint Windows 11 Home w/ RE 32GB USB", "img/hp1.jpg", "90,000 birr")

INSERT INTO products (name,description,image_url,price)  values("HP Pavilion 15 Laptop,11th Gen", "Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage <br>
              Full HD IPS micro-edge Display, Windows 11 Pro, Compact Design
              Long Battery Life 15-eg0025nr, 2021", "img/hp2.jpg   ", "90,000 birr"),("Razer Blade 14 Gaming Laptop",' AMD Ryzen 9 5900HX 8 Core, NVIDIA GeForce RTX 3080, 14" QHD 165Hz<br>
              16GB RAM, 1TB SSD - CNC Aluminum - Chroma RGB 
              THX Spatial Audio - Vapor Chamber Cooling', " img/razer.jpg", " 150,000 birr"),('Dell Latitude 5000 5530 15.6"', 'Notebook - Full HD - 1920 x 1080 - Intel Core i7 12th Gen i7-1255U <br>
              Deca-core (10 Core) 1.70 GHz - 16 GB Total RAM - 256 GB SSD - Gray 
              15.6" display with 1920 x 1080 resolution showcases movies, games and photos with impressive clarity', "img/dell-laptop-deal.jpg ", "150,000 birr")


INSERT INTO products (name,description,image_url,price)  values('Dell Latitude 5000 5530 15.6"', 'Notebook - Full HD - 1920 x 1080 - Intel Core i7 12th Gen i7-1255U <br>
              Deca-core (10 Core) 1.70 GHz - 16 GB Total RAM - 256 GB SSD - Gray 
              15.6" display with 1920 x 1080 resolution showcases movies, games and photos with impressive clarity', "img/dell-laptop-deal.jpg ", "150,000 birr"),("Thinkpad X1 Nano Gen 2 Intel(13 inch)", '12th Generation Intel® Core™ i5-1240P Processor (E-cores up to
                3.30 GHz P-cores up to 4.40 GHz)13" 2K (2160 x 1350), IPS,
                Anti-Glare, Non-touch, 100% sRGB, 450 nits, 60Hz 
                1080P FHD RGB with ThinkShutter Fingerprint Reader 
                Intel® Wi-Fi 6E AX211 2x2 AX vPro® & Bluetooth® 5.1 or above', "img/lenovo.jpg   ", "90,000 birr"),("Dell Chromebook 11 3189 11.6 Intel Celeron", " Multitasking is easy with 4 GB of RAM <br>
                16GB Storage allows for plenty storage for many applications 
                Equipped with a blazing fast, Intel Celeron 1.60 GHz processor", "img/dell.jpg", "40,000 birr"),
              
INSERT INTO products (name,description,image_url,price)  values("Apple 2020 MacBook Air Laptop", ' 3” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard <br>
               FaceTime HD Camera, Touch ID. Works with iPhone/iPad Space Gray', "img/apple.jpg", "120,000 birr"),("ASUS TUF Gaming F15 Gaming Laptop", '15.6" 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor <br> 
              GTX 1650 DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51', "img/asus.jpg", "80,000 birr"), ("HP 2022 Envy Laptop 17.3", "FHD IPS Touchscreen 10-Core 12th Intel i7-1255U <br>
              Xe Graphics 64GB DDR4 2TB NVMe SSD WiFi 6E HDMI 
              Thunderbolt4 Backlit KB Fingerprint Windows 11 Home w/ RE 32GB USB", "img/hp1.jpg", "90,000 birr")


INSERT INTO products (name,description,image_url,price)  values ("Dell Chromebook 11 3189 11.6 Intel Celeron", " Multitasking is easy with 4 GB of RAM <br>
              16GB Storage allows for plenty storage for many applications 
              Equipped with a blazing fast, Intel Celeron 1.60 GHz processor  ", " img/dell.jpg ",
               " 40,000 birr  "),




INSERT INTO products (name,description,image_url,price)  values ("Apple 2020 MacBook Air Laptop", '3” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard
FaceTime HD Camera, Touch ID. Works with iPhone/iPad  Space Gray', 'img/apple.jpg' , " 120,000 birr "),


INSERT INTO products (name,description,image_url,price)  values ("ASUS TUF Gaming F15 Gaming Laptop", ' 15.6" 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor <br> 
              GTX 1650 DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51', " img /asus.jpg  ", "80,000 birr")


INSERT INTO products (name,description,image_url,price)  values ("HP 2022 Envy Laptop 17.3", " FHD IPS Touchscreen 10-Core 12th Intel i7-1255U <br>
              Xe Graphics 64GB DDR4 2TB NVMe SSD WiFi 6E HDMI <br>
              Thunderbolt4 Backlit KB Fingerprint Windows 11 Home w/ RE 32GB USB", "img/hp1.jpg", "90,000 birr")




--
-- Dumping data for table `products`
--
-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


