-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 22 mars 2026 à 10:51
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `epcf`
--

-- --------------------------------------------------------

--
-- Structure de la table `card`
--

DROP TABLE IF EXISTS `card`;
CREATE TABLE IF NOT EXISTS `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `effect` longtext,
  `strength` int DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `toughness` int DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_161498D3C54C8C93` (`type_id`),
  KEY `IDX_161498D3A76ED395` (`user_id`),
  KEY `IDX_161498D37ADA1FB5` (`color_id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `card`
--

INSERT INTO `card` (`id`, `effect`, `strength`, `type_id`, `user_id`, `color_id`, `name`, `toughness`, `image_name`, `updated_at`) VALUES
(15, 'Au début de la main phase 2, vous perdez X points de vie et piochez X cartes, X étant le nombres d\'adversaires qui ont subis des dommages de combats par vous ce tour-ci.', 2, 1, 2, 13, 'Tymna the Weaver', 2, 'tymna-699d7a1f868af306992555.webp', '2026-02-24 10:14:55'),
(21, 'Quand Ludo arrive sur le champs de bataille, détruisez toutes les \"ERREURS\" du code.', 8, 1, 2, 16, 'Ludo Roi du Code', 8, '1581012702822-699d990cba8a1951987202.jpg', '2026-02-24 12:26:52'),
(30, 'EPCF', 7, 1, 3, 10, 'EPCF', 7, 'banner-69a0161888d7d518437995.avif', '2026-02-26 09:44:56'),
(24, 'Quand Christopher arrive sur le champs de bataille il allume toutes les webcams du teams.', 9, 1, 2, 11, 'Christopher the MUSCLE', 9, 'christopher-699eba5d5a0dc194045015.png', '2026-02-25 09:01:17');

-- --------------------------------------------------------

--
-- Structure de la table `color`
--

DROP TABLE IF EXISTS `color`;
CREATE TABLE IF NOT EXISTS `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) NOT NULL,
  `symbole` varchar(255) NOT NULL,
  `frame` varchar(255) NOT NULL,
  `stats` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `color`
--

INSERT INTO `color` (`id`, `label`, `symbole`, `frame`, `stats`) VALUES
(1, 'Noir', 'symbols/b.jpeg', 'black/blackregular.jpg', 'black/blackstatsregular.jpeg'),
(2, 'Rouge', 'symbols/r.jpeg', 'red/redregular.jpg', 'red/redstatsregular.jpeg'),
(3, 'Bleu', 'symbols/u.jpeg', 'blue/blueregular.jpg', 'blue/bluestatsregular.jpeg'),
(4, 'Blanc', 'symbols/w.jpeg', 'white/whiteregular.jpg', 'white/whitestatsregular.jpeg'),
(5, 'Vert', 'symbols/g.jpeg', 'green/greenregular.jpg', 'green/greenstatsregular.jpeg'),
(7, 'Azorius', 'symbols/azoriushybrid.jpeg', 'multicolored/azoriusregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(8, 'Boros', 'symbols/boroshybrid.jpeg', 'multicolored/borosregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(9, 'Dimir', 'symbols/dimirhybrid.jpeg', 'multicolored/dimirregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(10, 'Golgari', 'symbols/golgarihybrid.jpeg', 'multicolored/golgariregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(11, 'Gruul', 'symbols/gruulhybrid.jpeg', 'multicolored/gruulregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(12, 'Izzet', 'symbols/izzethybrid.jpeg', 'multicolored/izzetregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(13, 'Orzhov', 'symbols/orzhovhybrid.jpeg', 'multicolored/orzhovregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(14, 'Rakdos', 'symbols/rakdoshybrid.jpeg', 'multicolored/rakdosregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(15, 'Selesnya', 'symbols/selesnyahybrid.jpeg', 'multicolored/selesnyaregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg'),
(16, 'Simic', 'symbols/simichybrid.jpeg', 'multicolored/simicregular.jpeg', 'multicolored/multicoloredstatsregular.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20260218091144', '2026-02-18 09:11:57', 157),
('DoctrineMigrations\\Version20260218102331', '2026-02-18 10:23:42', 100),
('DoctrineMigrations\\Version20260218102747', '2026-02-18 10:27:51', 97),
('DoctrineMigrations\\Version20260218125305', '2026-02-18 12:53:33', 118),
('DoctrineMigrations\\Version20260219081352', '2026-02-19 08:14:05', 143),
('DoctrineMigrations\\Version20260219081606', '2026-02-19 08:16:10', 125),
('DoctrineMigrations\\Version20260223091457', '2026-02-23 09:15:40', 118),
('DoctrineMigrations\\Version20260223092603', '2026-02-23 09:26:08', 72),
('DoctrineMigrations\\Version20260223092930', '2026-02-23 09:29:33', 70);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext NOT NULL,
  `headers` longtext NOT NULL,
  `queue_name` varchar(190) NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750` (`queue_name`,`available_at`,`delivered_at`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ressource`
--

DROP TABLE IF EXISTS `ressource`;
CREATE TABLE IF NOT EXISTS `ressource` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `card_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_939F45444ACC9A20` (`card_id`),
  KEY `IDX_939F45447ADA1FB5` (`color_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `label`) VALUES
(1, 'Créature');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(180) NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_IDENTIFIER_USERNAME` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `roles`, `password`) VALUES
(2, 'octo', '[\"ROLE_USER\"]', '$2y$13$Q9DUuVFDzCFclW5Pv.w9Su2W1pcxCjtC5ljhS2SKCpijL1smMrrLq'),
(3, 'epcf', '[\"ROLE_USER\"]', '$2y$13$h2qhSWOidD2ZgyeK2QiUmeCqU6SEQCDgPmjMf.Paok/TBg7fVY3c2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
