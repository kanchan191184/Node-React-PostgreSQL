var express = require("express");
var router = express.Router();

const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "kanchu21",
  database: "FirstDB",
});

client.connect();

const query = "SELECT * FROM users";

client.query(query, (err, res) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(res.rows);
    router.get("/", (req, res1, next) => {
      //   res.send(
      //     res
      //       .map((iterable) => {
      //         iterable.Name;
      //       })
      //       .join("")
      //   );
      res1.json({ value: res.rows });
    });
  }

  client.end();
});

module.exports = router;
