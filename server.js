const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const pool = require("./database");

const postPackingListRoutes = require("./routes/api/post");
const getPackingListRoutes = require("./routes/api/get");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("finalcheck server running");
});

app.use("/api/v1/finalcheck", postPackingListRoutes);

app.use("/api/v1/finalcheck", getPackingListRoutes);

// app.get("/getlist", async (req, res) => {
//   console.log("hellohello");
//   const getSTMT = `SELECT * FROM allitems;`;
//   console.log("getting list");
//   let responseOutput;
//   pool.query(getSTMT).then((response) => {
//     console.log("got list");
//     responseOutput = response;

//     res.send(response);
//   });
//   return res;
// });
// app.get("/getAllLists", (req, res) => {
//   console.log("hellohello");
//   const getSTMT = `SELECT * FROM allitems;`;
//   console.log("getting list");

//   pool.query(getSTMT).then((resopnse) => {
//     console.log("got list");
//     res.send(resopnse);
//   });
// });
// app.use("/api/v1/post", postPackingListRoutes);
// app.use("/api/v1/get", getPackingListRoutes);

app.get("/", (req, res) => {
  res.send("finalcheck server running");
});

// POST REQUESTS

// EDIT
app.post("/edititem", (req, res) => {
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

app.post("/editcategory", (req, res) => {
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

app.post("/edittitle", (req, res) => {
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

app.post("/deleteitem", (req, res) => {
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

app.post("/deletelist", (req, res) => {
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

app.post("/deletecategory", (req, res) => {
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

app.listen(4000, () => console.log("Server on localhost: 4000"));

/* FOR LATER - with user 
app.get("/getuser", (req, res) => {
    const getSTMT = `SELECT * FROM accounts;`

    pool.query(getSTMT).then((resopnse)=>{
        console.log("got user")
        res.send(resopnse)
    })
})

app.post("/adduser", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log("Username:" + username)
    console.log("Password:" + password)

    const insertSTMT = `INSERT INTO accounts (username, password) VALUES ( '${username}','${password}');`

    pool.query(insertSTMT).then((response) => {
        console.log("data saved")
        console.log(response)
    })

    .catch((err) => {
        console.log(err)
    })

    console.log(req.body)
    res.send("Response Received:" + req.body)
})

*/
