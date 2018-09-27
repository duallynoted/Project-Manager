--create tables
CREATE TABLE "entry" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (60) NOT NULL,
	"project_name" VARCHAR (60) NOT NULL,
	"date" DATE NOT NULL,
	"start_time" INT,
	"end_time" INT 
	);
	

CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (120) NOT NULL,
	"entry_id" INT REFERENCES "entry"
	);

