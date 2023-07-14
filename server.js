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

pool.query("CREATE TABLE allitems(id SERIAL NOT NULL, title varchar(100), category varchar(200), item varchar(200), PRIMARY KEY(ID));", (err, res) => {
    console.log(err, res);
    pool.end();
});
// app.get("/", (req, res) => {
//   res.send("finalcheck server running");
// });

// POST REQUESTS

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
