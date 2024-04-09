const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_p2ku_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-coat68i1hbls73ftt2q0-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheckv2",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
