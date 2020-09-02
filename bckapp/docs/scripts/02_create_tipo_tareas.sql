CREATE TABLE `demodb`.`tipos_tareas` (
  `id_tipo` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_tipo`));

INSERT INTO `demodb`.`tipos_tareas` (`id_tipo`, `descripcion`) VALUES ('1', 'Salud');
INSERT INTO `demodb`.`tipos_tareas` (`id_tipo`, `descripcion`) VALUES ('2', 'Trabajo');
INSERT INTO `demodb`.`tipos_tareas` (`id_tipo`, `descripcion`) VALUES ('3', 'Social');
INSERT INTO `demodb`.`tipos_tareas` (`id_tipo`, `descripcion`) VALUES ('4', 'Cotidiano');