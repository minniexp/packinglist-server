const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-ceaemeta4996meb7np50-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheck",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
