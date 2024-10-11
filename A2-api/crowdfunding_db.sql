DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255),
  PRIMARY KEY (`CATEGORY_ID`)
);

DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(255),
  `CAPTION` varchar(255),
  `TARGET_FUNDING` decimal(10, 0) NULL DEFAULT NULL,
  `CURRENT_FUNDING` decimal(10, 0) NULL DEFAULT NULL,
  `CITY` varchar(255),
  `ACTIVE` tinyint NULL DEFAULT NULL,
  `CATEGORY_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`),
  FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`)
);

DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `DONATION_ID` int NOT NULL AUTO_INCREMENT,
  `DATE` DATE,
  `AMOUNT` decimal(10, 0) NULL DEFAULT NULL,
  `GIVER` varchar(255),
  `FUNDRAISER_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`DONATION_ID`),
  FOREIGN KEY (`FUNDRAISER_ID`) REFERENCES `fundraiser` (`FUNDRAISER_ID`)
);


INSERT INTO `category` VALUES (1, 'medical');
INSERT INTO `category` VALUES (2, 'education');
INSERT INTO `category` VALUES (3, 'social impact');
INSERT INTO `category` VALUES (4, 'crisis relief');


INSERT INTO `fundraiser` VALUES (16, 'John Doe', 'Help rebuild the local school', 10000, 1500, 'New York', 1, 1);
INSERT INTO `fundraiser` VALUES (17, 'Jane Smith', 'Support animal shelter', 5000, 800, 'San Francisco', 1, 1);
INSERT INTO `fundraiser` VALUES (18, 'Emily Clark', 'Medical bills support', 20000, 5000, 'Los Angeles', 1, 2);
INSERT INTO `fundraiser` VALUES (19, 'Michael Johnson', 'Community park renovation', 7000, 2000, 'Chicago', 1, 2);
INSERT INTO `fundraiser` VALUES (20, 'Sarah Williams', 'Art program funding', 12000, 6000, 'Austin', 1, 3);
INSERT INTO `fundraiser` VALUES (21, 'David Brown', 'Help a family after fire', 30000, 15000, 'Houston', 0, 3);
INSERT INTO `fundraiser` VALUES (22, 'Laura Miller', 'Church restoration project', 8000, 3000, 'Miami', 1, 4);
INSERT INTO `fundraiser` VALUES (23, 'Chris Lee', 'Fund new tech startup', 25000, 5000, 'Seattle', 1, 4);
INSERT INTO `fundraiser` VALUES (24, 'Sophia Davis', 'Charity marathon for cancer', 15000, 7000, 'Boston', 1, 2);
INSERT INTO `fundraiser` VALUES (25, 'Daniel Wilson', 'Homeless shelter food drive', 6000, 2500, 'Denver', 1, 3);

INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (1, '2024-09-01', 500, 'Alice Johnson', 16);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (2, '2024-09-03', 300, 'Bob Smith', 17);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (3, '2024-09-05', 1000, 'Charlie Adams', 18);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (4, '2024-09-07', 150, 'Dana White', 19);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (5, '2024-09-09', 200, 'Ella Roberts', 20);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (6, '2024-09-11', 1200, 'Frank Martin', 21);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (7, '2024-09-13', 500, 'George Turner', 22);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (8, '2024-09-15', 2500, 'Helen King', 23);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (9, '2024-09-17', 800, 'Ivy Thomas', 24);
INSERT INTO `donation` (DONATION_ID, `DATE`, `AMOUNT`, `GIVER`, `FUNDRAISER_ID`) VALUES (10, '2024-09-19', 600, 'Jack Wilson', 25);
