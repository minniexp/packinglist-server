const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheckdb_btqj_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-crdgngjtq21c73d467e0-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheckdb_btqj",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
