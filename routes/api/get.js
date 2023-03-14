const router = require("express").Router();
const pool = require("../../database");

// GET REQUESTS
router.get("/getAllLists", (req, res) => {
  console.log()
  const getSTMT = `SELECT DISTINCT ON (title) id, title FROM allitems`;

  pool.query(getSTMT).then((resopnse) => {
    console.log("got list");
    res.send(resopnse);
  }).catch(e => console.log("error is", e));
});

router.get("/getlist/list/:listID", (req, res) => {
  console.log("getting list");
  const listID = req.params.listID;
  console.log(listID);
  const getSTMT = `SELECT * FROM allitems WHERE title = (SELECT title FROM allitems WHERE id = '${listID}');`;

  // const getSTMT = `SELECT * FROM allitems WHERE title = (SELECT title FROM allitems WHERE id = '${listID}');`;

  pool.query(getSTMT).then((resopnse) => {
    console.log("got list 2");
    res.send(resopnse);
  });
});

module.exports = router;
