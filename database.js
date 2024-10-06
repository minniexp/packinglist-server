const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheckdb_d755_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-cs0v44i3esus7398uung-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheckdb_d755",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
