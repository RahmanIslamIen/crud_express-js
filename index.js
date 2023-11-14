const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_express_js",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!");
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// tampil semua data users
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Error retrieving users:", error);
      res.status(500).send("Error retrieving users");
    } else {
      res.status(200).json(results);
    }
  });
});

// insert data
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const { name, emailaddress } = req.body;

  if (!name || !emailaddress) {
    return res.status(400).send("Name and emailaddress are required");
  }

  const newUser = { name, emailaddress };
  connection.query("INSERT INTO users SET ?", newUser, (error, results) => {
    if (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Error creating user");
    } else {
      res.status(201).send("User created successfully");
    }
  });
});

// menyalakan port localhost
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
