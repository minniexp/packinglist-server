const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.REACT_APP_DATABASE_USER,
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: process.env.REACT_APP_DATABASE_HOST,
  port: 5432,
  database: process.env.REACT_APP_DATABASE,
  ssl: true,
});

//update ssl item - future

module.exports = pool;
