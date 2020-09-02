CREATE TABLE `demodb`.`tareas` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  `fecha` DATETIME NULL,
  `id_tipo` INT NOT NULL,
  PRIMARY KEY (`id_tareas`),
  INDEX `id_tipo_idx` (`id_tipo` ASC) VISIBLE,
  CONSTRAINT `id_tipo`
    FOREIGN KEY (`id_tipo`)
    REFERENCES `demodb`.`tipos_tareas` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);