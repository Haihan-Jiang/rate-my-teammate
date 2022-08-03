DROP DATABASE IF EXISTS RATE_MY_TEAMMATE;
CREATE DATABASE RATE_MY_TEAMMATE;
USE RATE_MY_TEAMMATE;
DROP TABLE IF EXISTS Profile,
Users,
Account,
Majors,
Review,
Review_Neg_Tag,
Neg_Tag,
Review_Pos_Tag,
Pos_Tag;
CREATE TABLE IF NOT EXISTS Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  lastname VARCHAR(64),
  firstname VARCHAR(64),
  password VARCHAR(64) NOT NULL,
  role VARCHAR(45),
  enabled TINYINT(4)
);
CREATE TABLE IF NOT EXISTS Majors(
  major_id INT AUTO_INCREMENT PRIMARY KEY,
  major TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS Neg_Tag (
  neg_tag_id INT AUTO_INCREMENT PRIMARY KEY,
  neg_tag TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS Pos_Tag (
  pos_tag_id INT AUTO_INCREMENT PRIMARY KEY,
  pos_tag TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS Account(
  account_id INT AUTO_INCREMENT PRIMARY KEY,
  lastname VARCHAR(64),
  firstname VARCHAR(64),
  CASE_ID VARCHAR(10) NOT NULL,
  PASSWORD VARCHAR(64) NOT NULL,
  FIRST_MAJOR_ID INT NOT NULL,
  SECOND_MAJOR_ID INT,
  GRADUATION_YEAR INT(4) NOT NULL --   FOREIGN KEY (FIRST_MAJOR_ID) REFERENCES Majors(major_id) ON DELETE SET NULL,
  --   FOREIGN KEY (SECOND_MAJOR_ID) REFERENCES Majors(major_id) ON DELETE SET NULL
);
CREATE TABLE IF NOT EXISTS Profile(
  PAGE_ID INT AUTO_INCREMENT PRIMARY KEY,
  lastname VARCHAR(64),
  firstname VARCHAR(64),  
  CASE_ID VARCHAR(10),
  OVERALL_RATING DOUBLE,
  GRADUATION_STATUS BOOLEAN,
  GRADUATION_YEAR INT,
  EASE_OF_CONTACT DOUBLE,
  TIMELINESS DOUBLE,
  CONTRIBUTIONS DOUBLE,
  RESPECTFUL DOUBLE,
  FIRST_MAJOR_ID INT,
  SECOND_MAJOR_ID INT
);
CREATE TABLE IF NOT EXISTS Review (
  review_id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  page_id INT NOT NULL,
  review_date DATE NOT NULL,
  ease_of_contact DOUBLE NOT NULL,
  timeliness DOUBLE NOT NULL,
  contributions DOUBLE NOT NULL,
  respectful DOUBLE NOT NULL,
  course VARCHAR(7) NOT NULL,
  year_semester VARCHAR(10),
  work_again BOOLEAN,
  grade CHAR(1),
  comments text --   FOREIGN KEY (reviewer_id) REFERENCES Account(account_id),
  --   FOREIGN KEY (page_id) REFERENCES Profile(PAGE_ID)
);
CREATE TABLE IF NOT EXISTS Review_Neg_Tag (
  review_neg_tag_id INT AUTO_INCREMENT PRIMARY KEY,
  neg_tag_id INT NOT NULL,
  review_id INT NOT NULL --   FOREIGN KEY (review_id) REFERENCES Review(review_id),
  --   FOREIGN KEY (neg_id) REFERENCES Neg_Tag(neg_tag_id)
);
CREATE TABLE IF NOT EXISTS Review_Pos_Tag (
  review_pos_tag_id INT AUTO_INCREMENT PRIMARY KEY,
  pos_tag_id INT NOT NULL,
  review_id INT NOT NULL --     FOREIGN KEY (review_id) REFERENCES Review(review_id),
  --     FOREIGN KEY (pos_id) REFERENCES Pos_Tag(pos_tag_id)
);
------------------------- Functions -------------------------
---- create a new profile whenever a new account is created ---'
DROP TRIGGER IF EXISTS Account_Profile_Trigger;
CREATE TRIGGER Account_Profile_Trigger
AFTER
INSERT
  ON Account FOR EACH ROW BEGIN -- check if the profile already existed in the db
SET
  @exist = (
    SELECT
      EXISTS(
        SELECT
          *
        FROM
          Profile
        WHERE
          firstname = new.firstname,
          lastname = new.lastname,
          AND CASE_ID = new.case_id
      )
  );
-- if not exists
SET
  @graduation_status = new.GRADUATION_YEAR < year(curdate());
IF @exist = 0 THEN
INSERT INTO
  Profile(
    NAME,
    CASE_ID,
    OVERALL_RATING,
    GRADUATION_YEAR,
    GRADUATION_STATUS,
    EASE_OF_CONTACT,
    TIMELINESS,
    CONTRIBUTIONS,
    RESPECTFUL,
    FIRST_MAJOR_ID,
    SECOND_MAJOR_ID
  )
VALUES
  (
    new.name,
    new.case_id,
    Null,
    new.graduation_year,
    @graduation_status,
    NULL,
    NULL,
    NULL,
    NULL,
    new.first_major_id,
    new.second_major_id
  );
-- if  exists
  ELSEIF @exist = 1 THEN
UPDATE
  PROFILE
SET
  FIRST_MAJOR_ID = new.first_major_id,
  SECOND_MAJOR_ID = new.second_major_id,
  GRADUATION_YEAR = new.graduation_year,
  GRADUATION_STATUS = @graduation_status
WHERE
firstname = new.firstname,
lastname = new.lastname,
AND CASE_ID = new.CASE_ID;
END IF;
END;
------------------------- test data below -------------------------
--- delete all the data of a table, but keep the table ---
SET
  FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE Account;
TRUNCATE TABLE Major;
TRUNCATE TABLE Profile;
TRUNCATE TABLE Neg_Tag;
TRUNCATE TABLE Pos_Tag;
TRUNCATE TABLE Review;
TRUNCATE TABLE Review_Neg_Tag;
TRUNCATE TABLE Review_Pos_Tag;
SET
  FOREIGN_KEY_CHECKS = 1;
--- Majors examples ---
INSERT INTO
  Majors(major)
VALUES
  ("Computer Science"),
  ("Mathametics"),
  ("Statistics"),
  ("Biomedical Engineering"),
  ("Chemistry"),
  ("Physics"),
  ("Philosophy"),
  ("English");
--- Trigger function for graduation_status ---
  CREATE TRIGGER update_grad
AFTER
INSERT
  OR
UPDATE
  ON Profile -- FOR EACH ROW WHEN ((pg_trigger_depth() < 1)) --
  FOR EACH ROW BEGIN -- make status to be true if year < current year --
UPDATE
  Profile
SET
  GRADUATION_STATUS = TRUE -- in PostgreSQL, current year is date_part('year', now()) --
WHERE
  GRADUATION_YEAR < year(curdate());
-- make status to be true if year < current year --
UPDATE
  Profile
SET
  GRADUATION_STATUS = FALSE
WHERE
  GRADUATION_STATUS > year(curdate());
END;
--- profile examples ---
INSERT INTO
  Profile(PAGE_ID, GRADUATION_STATUS, GRADUATION_YEAR)
VALUES
  (1, True, 2010),
  (2, True, 2020),
  (3, False, 2030);
--- Negative tags examples ---
INSERT INTO
  Neg_Tag(neg_tag)
VALUES
  ("Missed most of the meetings"),
  ("Always late"),
  ("Tough guy"),
  ("His workload? Your workload."),
  ("Paired with him? You'll fail.");
--- Reviews example ---
INSERT INTO
  Review(
    reviewer_id,
    page_id,
    review_date,
    ease_of_contact,
    timeliness,
    contributions,
    respectful,
    course,
    year_semester,
    work_again,
    grade,
    comments
  )
VALUES
  (
    12,
    2,
    '2021-03-15',
    2.5,
    3.5,
    4.0,
    2.0,
    'CSDS132',
    '2021Spring',
    False,
    'B',
    "Really tough guy. Team up with him, you will be treated as trash."
  ),
  (
    2,
    12,
    '2021-03-20',
    3.5,
    4.5,
    1.0,
    3.0,
    'CSDS132',
    '2021Spring',
    False,
    'B',
    "This guy knows nothing about programming. You will get a no-paied TA job."
  ),
  (
    3,
    11,
    '2021-09-11',
    4.5,
    4.5,
    5.0,
    5.0,
    'CSDS391',
    '2021Fall',
    True,
    'A',
    "She is the best teammate I ever had!! She's definitely a straignt-A student!"
  );
DELETE FROM
  Review;
--- Review_Neg_Tag examples ---
INSERT INTO
  Review_Neg_Tag(neg_id, review_id)
VALUES
  (2, 7),(3, 7),
  (5, 8),
  (1, 9),
  (2, 9) ----------- Account_Profile_Trigger Test data -----------
INSERT INTO
  Account(
    Name,
    CASE_ID,
    PASSWORD,
    FIRST_MAJOR_ID,
    SECOND_MAJOR_ID,
    GRADUATION_YEAR
  )
VALUES
  ('Nora Tang', 'jxt580', '123456', 1, 2, 2023),
  ('Mike Fan', 'wxh83', '1234567', 2, 4, 2020)
INSERT INTO
  Profile(
    Name,
    CASE_ID,
    OVERALL_RATING,
    graduation_status,
    graduation_year,
    ease_of_contact,
    timeliness,
    contributions,
    respectful,
    first_major_id,
    second_major_id
  )
VALUES
  (
    'James Tang',
    'ixt678',
    4.0,
    1,
    2021,
    2.0,
    2.0,
    4.0,
    5.0,
    3,
    1
  ),
  (
    'Alex Izen',
    'alz459',
    3.6,
    0,
    2021,
    4.0,
    4.0,
    4.0,
    3.0,
    2,
    4
  )
INSERT INTO
  Account(
    Name,
    CASE_ID,
    PASSWORD,
    FIRST_MAJOR_ID,
    SECOND_MAJOR_ID,
    GRADUATION_YEAR
  )
VALUES
  ('James Tang', 'ixt678', '273889', 3, 2, 2019),
  ('Alex Izen', 'alz459', '1234567', 2, 4, 2023) --- Retrive negative tags of a certain review (ex. review_id = 7) ---
SELECT
  neg_tag
FROM
  Neg_Tag
WHERE
  neg_tag_id in (
    SELECT
      neg_id
    FROM
      Review_Neg_Tag
    WHERE
      review_id = 7
  );
---Ratings Trigger Function, after Review created-----
  DROP TRIGGER IF EXISTS Ratings_Trigger;
DELIMITER / / CREATE TRIGGER Ratings_Trigger
AFTER
INSERT
  ON Review FOR EACH ROW BEGIN
SET
  @ave_t = (
    Select
      AVG(timeliness) 'average timeliness rating'
    FROM
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_e = (
    Select
      AVG(ease_of_contact) 'average ease_of_contact rating'
    From
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_c = (
    Select
      AVG(contributions) 'average contribution rating'
    From
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_r = (
    Select
      AVG(respectful) 'average respectful rating'
    From
      Review
    WHERE
      page_id = new.page_id
  );
UPDATE
  Profile
SET
  overall_rating = (@ave_t + @ave_e + @ave_c + @ave_r) / 4.0,
  timeliness = @ave_t,
  ease_of_contact = @ave_e,
  contributions = @ave_c,
  respectful = @ave_r
WHERE
  page_id = new.page_id;
END / / ---Ratings Trigger Function, after Submitted Correction-----
DROP TRIGGER IF EXISTS Ratings_Trigger_Update;
DELIMITER / / CREATE TRIGGER Ratings_Trigger_Update
AFTER
UPDATE
  ON Review FOR EACH ROW BEGIN
SET
  @ave_t = (
    Select
      AVG(timeliness) 'average timeliness rating'
    FROM
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_e = (
    Select
      AVG(ease_of_contact) 'average ease_of_contact rating'
    From
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_c = (
    Select
      AVG(contributions) 'average contribution rating'
    From
      Review
    WHERE
      page_id = new.page_id
  ),
  @ave_r = (
    Select
      AVG(respectful) 'average respectful rating'
    From
      Review
    WHERE
      page_id = new.page_id
  );
UPDATE
  Profile
SET
  overall_rating = (@ave_t + @ave_e + @ave_c + @ave_r) / 4.0,
  timeliness = @ave_t,
  ease_of_contact = @ave_e,
  contributions = @ave_c,
  respectful = @ave_r
WHERE
  page_id = new.page_id;
END / / -----Ratings test data-----
INSERT INTO
  Review(
    reviewer_id,
    page_id,
    review_date,
    EASE_OF_CONTACT,
    TIMELINESS,
    CONTRIBUTIONS,
    RESPECTFUL,
    course,
    year_semester,
    work_again,
    grade,
    comments
  )
VALUES
  (
    3,
    2,
    '2021-03-15',
    5.0,
    4.0,
    2.0,
    3.0,
    'CSDS440',
    '2020Fall',
    0,
    'C',
    'Bad bad bad'
  ),
  (
    5,
    2,
    '2021-01-15',
    3.0,
    4.0,
    1.0,
    3.0,
    'MATH408',
    '2020Spring',
    0,
    'B',
    'Bad bad bad'
  ),
  (
    6,
    3,
    '2021-03-12',
    3.0,
    3.0,
    1.0,
    4.0,
    'EECS281',
    '2019Fall',
    0,
    'B',
    'Bad bad bad'
  );
Update
  Review
SET
  EASE_OF_CONTACT = 3.0
WHERE
  review_id = 2;
SELECT
  *
FROM
  Review
WHERE
  page_id = 2;
SELECT
  *
FROM
  Profile
WHERE
  page_id = 2;