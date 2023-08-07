-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 07 août 2023 à 15:53
-- Version du serveur : 10.6.12-MariaDB-0ubuntu0.22.04.1
-- Version de PHP : 8.2.8

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet_glacier`
--
CREATE DATABASE IF NOT EXISTS `projet_glacier` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `projet_glacier`;

-- --------------------------------------------------------

--
-- Structure de la table `congelateur`
--

DROP TABLE IF EXISTS `congelateur`;
CREATE TABLE `congelateur` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(190) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `congelateur`
--

INSERT INTO `congelateur` (`id`, `nom`, `description`) VALUES
(1, 'Lorelei Yeates', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
(2, 'Lamond Kyngdon', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
(3, 'Lily Whitsun', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'),
(4, 'Sunny Dalliston', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'),
(5, 'Rozella Cosser', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.');

-- --------------------------------------------------------

--
-- Structure de la table `glace`
--

DROP TABLE IF EXISTS `glace`;
CREATE TABLE `glace` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `volume_en_litre` int(11) NOT NULL,
  `date_de_production` datetime NOT NULL,
  `date_de_sortie` datetime NOT NULL,
  `id_parfum` bigint(20) UNSIGNED NOT NULL,
  `id_congelateur` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `glace`
--

INSERT INTO `glace` (`id`, `volume_en_litre`, `date_de_production`, `date_de_sortie`, `id_parfum`, `id_congelateur`) VALUES
(1, 6, '2023-08-01 00:00:09', '2023-08-07 21:02:33', 1, 1),
(2, 3, '2023-08-02 04:50:03', '2023-08-07 18:11:53', 2, 2),
(3, 7, '2023-08-02 00:19:26', '2023-08-05 18:31:51', 3, 3),
(4, 6, '2023-08-01 06:06:46', '2023-08-06 13:04:38', 4, 4),
(5, 4, '2023-08-02 19:09:02', '2023-08-06 13:35:22', 5, 5);

-- --------------------------------------------------------

--
-- Structure de la table `parfum`
--

DROP TABLE IF EXISTS `parfum`;
CREATE TABLE `parfum` (
  `id` bigint(11) UNSIGNED NOT NULL,
  `nom` varchar(190) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `parfum`
--

INSERT INTO `parfum` (`id`, `nom`, `description`) VALUES
(1, 'citron', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'),
(2, 'pistache', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'),
(3, 'chocolat', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'),
(4, 'café', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'),
(5, 'fraise', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(190) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `nom`) VALUES
(1, 'Christabel Jenno'),
(2, 'Alva Kleinplac'),
(3, 'Kirbee Koubu'),
(4, 'Tannie Cranmore'),
(5, 'Nert Oxbury');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE `utilisateurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(190) NOT NULL,
  `password` varchar(190) NOT NULL,
  `id_role` bigint(20) UNSIGNED NOT NULL,
  `id_congelateur` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `email`, `password`, `id_role`, `id_congelateur`) VALUES
(1, 'dbatey0@nsw.gov.au', 'jV0', 1, 1),
(2, 'tdevaux1@typepad.com', 'lC6', 1, 2),
(3, 'jboreland2@usatoday.com', 'jG8', 1, 3),
(4, 'apigot3@reverbnation.com', 'hK9', 2, 1),
(5, 'wstrephan4@mac.com', 'jL1G', 3, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `congelateur`
--
ALTER TABLE `congelateur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `glace`
--
ALTER TABLE `glace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_glace_parfum_id` (`id_parfum`),
  ADD KEY `fk_glace_congelateur_id` (`id_congelateur`);

--
-- Index pour la table `parfum`
--
ALTER TABLE `parfum`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_utilisateurs_role_id` (`id_role`),
  ADD KEY `fk_utilisateurs_congelateur_id` (`id_congelateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `congelateur`
--
ALTER TABLE `congelateur`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `glace`
--
ALTER TABLE `glace`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `parfum`
--
ALTER TABLE `parfum`
  MODIFY `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `glace`
--
ALTER TABLE `glace`
  ADD CONSTRAINT `fk_glace_congelateur_id` FOREIGN KEY (`id_congelateur`) REFERENCES `congelateur` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_glace_parfum_id` FOREIGN KEY (`id_parfum`) REFERENCES `parfum` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `fk_role_id_role_utilisateurs_id_utilisateur` FOREIGN KEY (`id`) REFERENCES `utilisateurs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `fk_utilisateurs_congelateur_id` FOREIGN KEY (`id_congelateur`) REFERENCES `congelateur` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_utilisateurs_role_id` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
