-- CreateTable
CREATE TABLE `CollectionManga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manga_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `manga_image` VARCHAR(191) NULL,
    `manga_title` VARCHAR(191) NULL,

    UNIQUE INDEX `CollectionManga_user_email_manga_mal_id_key`(`user_email`, `manga_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommentManga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manga_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `manga_title` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
