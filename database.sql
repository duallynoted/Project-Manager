--create tables
CREATE TABLE "project" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (120) NOT NULL 
    );

CREATE TABLE "entry" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (60) NOT NULL,
    "project_id" INT REFERENCES "project",
    "date" DATE NOT NULL,
    "start_time" TIME,
    "end_time" TIME 
    );
    
    
INSERT INTO "project" ("name")
VALUES ('Make Dinner');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('cut veggies', 1, '09/30/2018', '6:00pm', '6:15pm');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('make alfredo sauce', 1, '09/30/2018', '6:15pm', '6:35pm');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('boil pasta', 1, '09/30/2018', '6:20pm', '6:28pm');


SELECT * FROM "entry"
JOIN "project" ON "project"."id" = "entry"."project_id";

SELECT * FROM "project";

INSERT INTO "project" ("name")
VALUES ('Develop Program');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('server static files', 2, '09/26/2018', '9:00am', '9:35am');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('set up database', 2, '09/26/2018', '9:35am', '12:00pm');

INSERT INTO "entry" ("name","project_id", DATE, "start_time","end_time")
VALUES ('client side views', 2, '09/26/2018', '1:15pm', '2:45pm');

SELECT * FROM "entry"
JOIN "project" ON "project"."id" = "entry"."project_id"
WHERE "project"."id"= 1;
