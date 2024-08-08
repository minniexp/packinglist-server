const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheckdb_ot0z_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-cqq27i8gph6c7383agc0-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheckdb_ot0z",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
