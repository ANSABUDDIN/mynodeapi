

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `otp` varchar(100) NOT NULL,
  `status` int NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `user` (`id`, `username`, `email`, `password`, `otp`, `status`, `date`) VALUES
(45, '.htaccess', 'izhanmugal10@gmail.com', '123456', '0', 0, '2022-10-10 07:52:19'),
(47, 'ali', 'ali@gmail.com', '123456', '0', 0, '2022-10-10 08:55:10'),
(50, 'Mayank', 'imayankk@rediffmail.com', 'imayank@111', '0', 0, '2022-10-11 18:00:34'),
(51, 'yousaf', 'yousaf@gmail.com', '+923318922709', '2229', 0, '2022-10-14 15:47:38'),
(52, 'ali', 'ali01@gmail.com', '123456', '0', 0, '2022-10-14 13:09:22');

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;


