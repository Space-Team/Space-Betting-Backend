# Space-Betting-Backend

Please see the main README of the [app](https://github.com/Space-Team/Space-Betting)

The link to the deployed API is https://planet-wager.herokuapp.com/

# Database ERD

![image](https://user-images.githubusercontent.com/26422138/36047701-0f2f8636-0d9a-11e8-8128-b14caa200da9.png)
<br>
A note about this database: Due to the time constraints we had working on this group project, we did not incorporate real auth. Demo usernames and passwords are currently stored in the public database and are viewable to anyone. If you download and use the source code from this app, please take the necessary steps to incorporate real auth and encryption.

# Installation Instructions

Fork the repo and then clone it down to your computer. Run ```npm install``` and make sure you have knex installed globally, which you can do with ```npm install knex -g```. From there you need to be sure your local postgres database is running, so run ```brew services start postgresql```.

Next you will need to create a database that connects to the knex migrations. You can either ```createdb planet-wager``` to match the database the knex.js file expects, or you can change the knex.js file and ```createdb dbname```, naming the database as you please.

After creating the database you will need to run ```knex migrate:latest``` and ```knex seed:run``` to create the table schema in the database and seed those tables with data.

From here you can run the database locally using ```npm run dev```.

# Authors

[Paul Highum](https://github.com/paulhighum)
[Amber Johnson](https://github.com/amberjohnsonsmile)
[Emily Pancake](https://github.com/epancake)
[Kyle Weintraub](https://github.com/themoonmoth)

# License
MIT
