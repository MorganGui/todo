USE mydatabase;

DROP TABLE IF EXISTS task;

CREATE TABLE task (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `checked` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)