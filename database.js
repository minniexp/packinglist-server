const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_user_ml4j_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-ciopm36nqql5rtb2me3g-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheck_user_ml4j",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
