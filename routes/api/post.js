const router = require("express").Router();
const pool = require("../../database");

router.post("/additem", (req, res) => {
  console.log("adding item");
  const title = req.body.title;
  const category = req.body.category;
  const item = req.body.item;

  console.log("title:" + title);
  console.log("category:" + category);
  console.log("item:" + item);

  const insertSTMT = `INSERT INTO allitems (title, category, item) VALUES ( '${title}','${category}','${item}');`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data saved");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

module.exports = router;
