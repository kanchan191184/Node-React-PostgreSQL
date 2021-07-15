// const pg = require("pg");
// const config = {
//   database: "FirstDB",
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "kanchu21",
// };
// const pool = new pg.Pool(config);
// const query = "SELECT * FROM users";

// pool.connect((err, client, done) => {
//   if (err) throw err;
//   client.query(query, (err, res) => {
//     if (err) console.log(err.stack);
//     else {
//       console.log(res.rows);
//     }
//     pool.end();
//   });
// });

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
  }

  client.end();
});
