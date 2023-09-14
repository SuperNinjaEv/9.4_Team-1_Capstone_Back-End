// module.exports = {
//       user: "postgres",
//       host: "localhost",
//       database: "nodeapp",
//       password: "yourPassword",
//       port: 5432,
//     };

    // File required for local and hosted apps

// http://vitaly-t.github.io/pg-promise/module-pg-promise.html


const pgp = require('pg-promise')();
require('dotenv').config();
DATABASE_URL = process.env.DATABASE_URL;//ADDED

const cn = DATABASE_URL ? {
  connectionString: DATABASE_URL,
  max: 30,
  ssl: {
    rejectUnauthorized: false,
  }, //removable
} : {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
}

// const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

//this here
// const cn = process.env.DATABASE_URL
//   ? {
//       connectionString: process.env.DATABASE_URL,
//       max: 30,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     }
//   : {
//       host: process.env.PG_HOST,
//       port: process.env.PG_PORT,
//       database: process.env.PG_DATABASE,
//       user: process.env.PG_USER,
//     };

// console.log(cn)


const db = pgp(cn);

module.exports = db;
