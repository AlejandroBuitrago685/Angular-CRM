-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2021 a las 15:55:25
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(20) NOT NULL,
  `nombre_dep` varchar(256) NOT NULL,
  `descripcion_dep` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre_dep`, `descripcion_dep`) VALUES
(1, 'Front-End', ''),
(2, 'Back-end', ''),
(3, 'Marketing', ''),
(4, 'RRSS', ''),
(5, 'MATEMATICAS', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `apellidos` varchar(256) NOT NULL,
  `imagen` varchar(2560) DEFAULT NULL,
  `email` varchar(256) NOT NULL,
  `telefono` int(12) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `fecha_alta` datetime NOT NULL,
  `calle` varchar(256) NOT NULL,
  `localidad` varchar(256) NOT NULL,
  `cp` int(7) NOT NULL,
  `provincia` varchar(256) NOT NULL,
  `departamentos_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `imagen`, `email`, `telefono`, `dni`, `fecha_alta`, `calle`, `localidad`, `cp`, `provincia`, `departamentos_id`) VALUES
(1, 'ionut', 'gombos', NULL, 'ionut@cra.es', 123123123, '3212321L', '2021-09-27 13:48:03', 'luego', 'seseña', 45223, 'toledo', '1,2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empl_dep`
--

CREATE TABLE `empl_dep` (
  `id_empl_dep` int(20) NOT NULL,
  `id_empleado` int(20) NOT NULL,
  `id_departamento` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empl_dep`
--

INSERT INTO `empl_dep` (`id_empl_dep`, `id_empleado`, `id_departamento`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(5, 1, 4),
(4, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `token` varchar(15) NOT NULL,
  `rol` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `token`, `rol`) VALUES
(1, 'Alejandro Buitrago', 'alejandro@cra.es', '1234321', 'sdav123vsdav43v', 'admin'),
(2, 'Andrei Grigorita', 'andrei@cra.es', '321123', '123basda4b451ad', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `departamentos_id` (`departamentos_id`);

--
-- Indices de la tabla `empl_dep`
--
ALTER TABLE `empl_dep`
  ADD PRIMARY KEY (`id_empl_dep`),
  ADD KEY `id_empleado` (`id_empleado`,`id_departamento`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `empl_dep`
--
ALTER TABLE `empl_dep`
  MODIFY `id_empl_dep` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empl_dep`
--
ALTER TABLE `empl_dep`
  ADD CONSTRAINT `empl_dep_ibfk_2` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `empl_dep_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
