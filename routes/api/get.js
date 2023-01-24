const router = require("express").Router();
const pool = require("../../database");

// GET REQUESTS
router.get("/getAllLists", (req, res) => {
  console.log("hellohello");
  const getSTMT = `SELECT * FROM allitems;`;
  console.log("getting list");

  pool.query(getSTMT).then((resopnse) => {
    console.log("got list");
    res.send(resopnse);
  });
});

module.exports = router;
