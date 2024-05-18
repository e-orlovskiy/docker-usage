create TABLE person(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255)
);

create TABLE post(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	content VARCHAR(255) NOT NULL,
	person_id INTEGER,
	FOREIGN KEY (person_id) REFERENCES person (id)
);