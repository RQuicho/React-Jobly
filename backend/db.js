"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri, DB_NAME } = require("./config");

// let db;

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     connectionString: getDatabaseUri(),
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// } else {
//   db = new Client({
//     connectionString: getDatabaseUri()
//   });
// }

const db = new Client({
  host: "/var/run/postgresql/",
  database: DB_NAME
});

db.connect();

module.exports = db;