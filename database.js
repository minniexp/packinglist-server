const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheck_user_user",
  // password: process.env.REACT_APP_DATABASE_PASSWORD,
  password: "T6Lyt0MfLZLdTNuceo3DXlDopSuQ7ErK",
  host: "dpg-cg7al71mbg5ab7nkv110-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheck_user",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
