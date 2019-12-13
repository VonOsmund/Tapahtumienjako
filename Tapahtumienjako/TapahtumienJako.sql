-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for projekti
CREATE DATABASE IF NOT EXISTS `projekti` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `projekti`;

-- Dumping structure for taulu projekti.events
CREATE TABLE IF NOT EXISTS `events` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL DEFAULT '' COMMENT 'Tapahtuman nimi',
  `Location` varchar(50) NOT NULL DEFAULT '' COMMENT 'Sijainti',
  `StartDate` date NOT NULL COMMENT 'Päivämäärä',
  `StartTime` time DEFAULT NULL COMMENT 'Aloitusaika',
  `Attendees` int(11) NOT NULL COMMENT 'Kävijämäärä',
  `Owner` int(10) unsigned NOT NULL COMMENT 'Viittaa käyttäjään, joka on luonut tapahtuman',
  `Summary` text NOT NULL DEFAULT '' COMMENT 'Tapahtuman kuvaus',
  `Price` int(11) DEFAULT NULL COMMENT 'Tapahtuman hinta',
  `Interested` int(11) DEFAULT NULL COMMENT 'Tapahtumasta kiinnostuneet',
  `Image` varchar(50) DEFAULT NULL COMMENT 'Tapahtuman kuva',
  PRIMARY KEY (`Id`),
  KEY `FK__users` (`Owner`),
  CONSTRAINT `FK__users` FOREIGN KEY (`Owner`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tapahtumat';

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu projekti.eventtag
CREATE TABLE IF NOT EXISTS `eventtag` (
  `EventID` int(11) NOT NULL,
  `TagID` int(11) NOT NULL,
  PRIMARY KEY (`EventID`,`TagID`),
  KEY `TagID` (`TagID`),
  CONSTRAINT `FK_eventtag_events` FOREIGN KEY (`EventID`) REFERENCES `events` (`Id`),
  CONSTRAINT `FK_eventtag_tags` FOREIGN KEY (`TagID`) REFERENCES `tags` (`tagId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu projekti.interests
CREATE TABLE IF NOT EXISTS `interests` (
  `userId` int(11) unsigned NOT NULL,
  `eventId` int(11) NOT NULL,
  KEY `FK_Interests_users` (`userId`),
  KEY `FK_Interests_events` (`eventId`),
  CONSTRAINT `FK_Interests_events` FOREIGN KEY (`eventId`) REFERENCES `events` (`Id`),
  CONSTRAINT `FK_Interests_users` FOREIGN KEY (`userId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu projekti.tags
CREATE TABLE IF NOT EXISTS `tags` (
  `tagId` int(11) NOT NULL,
  `tag` varchar(50) NOT NULL,
  PRIMARY KEY (`tagId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu projekti.users
CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(10) unsigned NOT NULL,
  `Username` varchar(50) NOT NULL DEFAULT '' COMMENT 'Käyttäjänimi',
  `Hash` varchar(50) NOT NULL DEFAULT '' COMMENT 'Käyttäjänimi+salasana stringistä generoitu hash',
  `Email` varchar(50) NOT NULL DEFAULT '' COMMENT 'sähköpostiosoite',
  `Admin` binary(50) NOT NULL COMMENT 'Onko käyttäjä Admin',
  `Picture` varchar(50) DEFAULT NULL COMMENT 'Profiilikuva',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Käyttäjät';

-- Tietojen vientiä ei oltu valittu.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
