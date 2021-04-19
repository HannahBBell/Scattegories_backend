CREATE TABLE categories(
id SERIAL PRIMARY KEY,
category TEXT
);

CREATE TABLE players (
id SERIAL PRIMARY KEY,
player TEXT UNIQUE);

INSERT INTO categories (category) VALUES ('cities'), ('sports'), ('hobbies'), ('dairy products'), ('insects'), ('countries'), ('summer sports'), ('non-olympic sports'), ('things that have spots'), ('things you can drink'), ('things that you wear'), ('things you shouldnt touch'), ('Taylor Swift songs'), ('tv shows'), ('films'), ('bands'), ('songs'), ('things that come out at night'), ('marine life'), ('animals'), ('dog breeds'), ('cat breeds'), ('food'), ('colours'), ('things that are sharp'), ('musicals'), ('disney characters'), ('kinds of soup'), ('languages'), ('capital cities'), ('herbs & spices'), ('cold things'), ('books/authors'), ('fashion brands'), ('cereals'), ('video games'), ('shoe brands'), ('occupations');

CREATE TABLE letters (
id SERIAL PRIMARY KEY,
letter TEXT UNIQUE);

INSERT INTO letters (letter) VALUES ('A'), ('B'), ('C'), ('D'), ('E'), ('F'), ('G'), ('H'), ('I'), ('J'), ('K'), ('L'), ('M'), ('N'), ('O'), ('P'), ('Q'), ('R'), ('S'), ('T'), ('U'), ('V'), ('W'), ('X'), ('Y'), ('Z');
