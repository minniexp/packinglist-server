const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_user2_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-ckjje86kpues73efhgog-a.oregon-postgres.render.com",
  port: 5432,
  database: "finalcheck_user2",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
