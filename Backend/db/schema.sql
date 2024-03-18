-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema finalproject
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema finalproject
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `finalproject` DEFAULT CHARACTER SET utf8mb3 ;
USE `finalproject` ;

-- -----------------------------------------------------
-- Table `finalproject`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(350) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `latitude` FLOAT, -- Add latitude attribute
  `longitude` FLOAT, -- Add longitude attribute
  `role` VARCHAR(45) NOT NULL DEFAULT 'user', -- Add role attribute
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `image_UNIQUE` (`image` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`forum`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`forum` (
  `idforum` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `content` VARCHAR(500) NOT NULL,
  `image-url` VARCHAR(45) NOT NULL,
  `createdat` VARCHAR(45) NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idforum`),
  INDEX `fk_forum_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_forum_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `content` LONGTEXT NOT NULL,
  `forum_idforum` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idcomments`),
  INDEX `fk_comments_forum1_idx` (`forum_idforum` ASC) VISIBLE,
  INDEX `fk_comments_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_comments_forum1`
    FOREIGN KEY (`forum_idforum`)
    REFERENCES `finalproject`.`forum` (`idforum`),
  CONSTRAINT `fk_comments_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`conversation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`conversation` (
  `idconversation` INT NOT NULL AUTO_INCREMENT,
  `time` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idconversation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`request` (
  `idrequest` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `problem` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `moredescription` VARCHAR(255) NOT NULL,
  `milage` VARCHAR(45) NOT NULL,
  `time` VARCHAR(45) NOT NULL, 
  `user_iduser` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `satisfaction` VARCHAR(45) NOT NULL,
  `imageurl` VARCHAR(255) NULL DEFAULT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  `langitude` VARCHAR(45) NOT NULL, 
  `spareTireOption` BOOLEAN,
  `parkingGarageOption` BOOLEAN, 
  PRIMARY KEY (`idrequest`),
  INDEX `fk_request_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`)
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `finalproject`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`images` (
  `idimages` INT NOT NULL AUTO_INCREMENT,
  `imageurl` VARCHAR(45) NOT NULL,
  `request_idrequest` INT NOT NULL,
  PRIMARY KEY (`idimages`),
  INDEX `fk_images_request1_idx` (`request_idrequest` ASC) VISIBLE,
  CONSTRAINT `fk_images_request1`
    FOREIGN KEY (`request_idrequest`)
    REFERENCES `finalproject`.`request` (`idrequest`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `conversation_idconversation` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idmessages`),
  INDEX `fk_messages_conversation1_idx` (`conversation_idconversation` ASC) VISIBLE,
  INDEX `fk_messages_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_messages_conversation1`
    FOREIGN KEY (`conversation_idconversation`)
    REFERENCES `finalproject`.`conversation` (`idconversation`),
  CONSTRAINT `fk_messages_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`notifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`notifications` (
  `idnotifications` INT NOT NULL AUTO_INCREMENT,
  `messge` TEXT NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'false',
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idnotifications`),
  INDEX `fk_notifications_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_notifications_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`paiment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`paiment` (
  `idpaiment` INT NOT NULL AUTO_INCREMENT,
  `amount` VARCHAR(45) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idpaiment`),
  INDEX `fk_paiment_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_paiment_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`participants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`participants` (
  `idparticipants` INT NOT NULL AUTO_INCREMENT,
  `user_iduser` INT NOT NULL,
  `conversation_idconversation` INT NOT NULL,
  PRIMARY KEY (`idparticipants`),
  INDEX `fk_participants_user_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_participants_conversation1_idx` (`conversation_idconversation` ASC) VISIBLE,
  CONSTRAINT `fk_participants_conversation1`
    FOREIGN KEY (`conversation_idconversation`)
    REFERENCES `finalproject`.`conversation` (`idconversation`),
  CONSTRAINT `fk_participants_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`professional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`professional` (
  `idprof` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(350) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  `langitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idprof`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`professional_has_request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`professional_has_request` (
  `professional_idprof` INT NOT NULL,
  `request_idrequest` INT NOT NULL,
  PRIMARY KEY (`professional_idprof`, `request_idrequest`),
  INDEX `fk_professional_has_request_request1_idx` (`request_idrequest` ASC) VISIBLE,
  INDEX `fk_professional_has_request_professional1_idx` (`professional_idprof` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_request_professional1`
    FOREIGN KEY (`professional_idprof`)
    REFERENCES `finalproject`.`professional` (`idprof`),
  CONSTRAINT `fk_professional_has_request_request1`
    FOREIGN KEY (`request_idrequest`)
    REFERENCES `finalproject`.`request` (`idrequest`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `finalproject`.`user_has_request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `finalproject`.`user_has_request` (
  `user_iduser` INT NOT NULL,
  `request_idrequest` INT NOT NULL,
  `assigned` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_iduser`, `request_idrequest`),
  INDEX `fk_user_has_request_request1_idx` (`request_idrequest` ASC) VISIBLE,
  INDEX `fk_user_has_request_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_request_request1`
    FOREIGN KEY (`request_idrequest`)
    REFERENCES `finalproject`.`request` (`idrequest`),
  CONSTRAINT `fk_user_has_request_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `finalproject`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
