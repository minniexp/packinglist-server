const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_p2ku_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-cmf03rud3nmc739cvtn0-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheck_p2ku",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
