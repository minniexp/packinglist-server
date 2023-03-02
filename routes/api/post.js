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

router.post("/createList", (req, res) => {
  console.log("creating new list");
  const title = req.body.title;

  console.log("title:" + title);

  const insertSTMT = `INSERT INTO allitems (title) VALUES ( '${title}');`;
  const getSTMT = `SELECT id FROM allitems WHERE title = ('${title}') ORDER BY id ASC;`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data saved");
      console.log("insert resopnse", response)
      pool.query(getSTMT).then((response) => {
        console.log("got id of new list");
        res.send(response);
      });
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  console.log("res", res);

  // res.send("Response Received from created list:" + req.body);

  ///////

  // const getSTMT = `SELECT * FROM allitems WHERE title = (SELECT title FROM allitems WHERE id = '${listID}');`;


});

// EDIT
router.post("/edititem", (req, res) => {
  const id = req.body.id;
  const item = req.body.item;

  console.log("id:" + id);
  console.log("item:" + item);

  const insertSTMT = `UPDATE allitems SET item='${item}' WHERE id=${id};`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data edited");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

router.post("/editcategory", (req, res) => {
  const category = req.body.category;
  const prevcategory = req.body.prevcategory;
  const title = req.body.title;

  console.log("category:" + category);
  console.log("prevcategory:" + prevcategory);
  console.log("title:" + title);

  const insertSTMT = `UPDATE allitems SET category='${category}' WHERE category='${prevcategory}' AND title='${title}';`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data edited");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

router.post("/edittitle", (req, res) => {
  const title = req.body.title;
  const prevtitle = req.body.prevtitle;

  console.log("prevtitle:" + prevtitle);
  console.log("title:" + title);

  const insertSTMT = `UPDATE allitems SET title='${title}' WHERE title='${prevtitle}';`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data edited");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

// DELETE

router.post("/deleteitem", (req, res) => {
  const id = req.body.id;

  console.log("id:" + id);

  const insertSTMT = `DELETE FROM allitems WHERE id=${id};`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data deleted");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

router.post("/deletelist", (req, res) => {
  const title = req.body.title;

  console.log("title:" + title);

  const insertSTMT = `DELETE FROM allitems WHERE title='${title}';`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("list deleted");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

router.post("/deletecategory", (req, res) => {
  const category = req.body.category;
  const title = req.body.title;

  console.log("title:" + title);
  console.log("category:" + category);

  const insertSTMT = `DELETE FROM allitems WHERE category='${category}' AND title='${title}';`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("category deleted");
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received:" + req.body);
});

module.exports = router;
