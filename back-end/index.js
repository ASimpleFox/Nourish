"use strict";
const express = require("express");
const app = express();
const fs = require('fs').promises;
const util = require("util");
const glob = require("glob");
const globPromise = util.promisify(glob);
const multer = require("multer");
const mysql = require("mysql2/promise");
const cors = require("cors");
const { get } = require("http");
app.use(cors());

const CLIENT_ERROR = 400;
const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = "A data base error occurred. Please try again later.";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

const db = mysql.createPool({
  host: process.env.DB_HOST || '35.192.117.206',
  database: process.env.DB_NAME || 'healthapp',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'A123456789Bc'
});

app.get('/all', async (req, res) => {
  try {
    let resultList = {"Users": []};
    let users = await getAll();
    for (let i = 0; i < users.length; i++) {
      let user = {
        "name": users[i]["Username"],
        "email": users[i]["Email"]
      };
      resultList.Users.push(user);
    }
    res.status(200).json(resultList);
  } catch (error){
    console.error(error);
    res.status(SERVER_ERROR).json({"error": SERVER_ERROR_MESSAGE});
  }
});

app.post("/image", async (req, res) => {
  try {
    let image = req.body["imageUrl"];
    console.log(image);
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (username === undefined || password === undefined) {
      res.status(400).json({"error": "missing username or password parameter"});
    }
    let returns = await getPassword(username)
    let returnPassword = (returns.length > 0) ? returns[0]["Passwords"] : "";
    if (returnPassword === password) {
      res.status(200).json({"result": "correct"});
    } else {
      res.status(200).json({"result": "incorrect"});
    }
  } catch(error) {
    console.log(error);
    res.status(SERVER_ERROR).json({"error": SERVER_ERROR_MESSAGE});
  }
});

app.post("/credential", async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let gender = req.body.gender;
    let age = req.body.age;
    let height = req.body.height;
    let weight = req.body.weight;
    if (await checkIfExist(username, email)) {
      res.status(205).json({"error": "the username or email alreay existed"});
    }
    if (username === undefined || password === undefined || email === undefined) {
      res.status(CLIENT_ERROR).json({"error": "missing username or password or email parameter"});
    }
    let info = [username, password, email, gender, age, height, weight];
    await createUser(info);
    res.status(200).json({"success": "successfully"});
  } catch(error) {
    console.log(error);
    res.status(SERVER_ERROR).json({"error": SERVER_ERROR_MESSAGE});
  }
});

async function createUser(info) {
  let query = "INSERT INTO Users(Username, Passwords, Email, Gender, Age, Height, Weights) VALUES (?, ?, ?, ?, ?, ?, ?);";
  await db.query(query, info);
}

async function checkIfExist(username, email) {
  let query = "SELECT * FROM Users WHERE Username = ?;";
  let [rows] = await db.query(query, [username]);
  let query2 = "SELECT * FROM Users WHERE Email = ?;";
  let [rows1] = await db.query(query2, [email]);
  return (rows.lengths >= 1 || rows1.length >= 1);
}

async function getPassword(username) {
  let query = "SELECT * FROM Users WHERE Username=?;";
  let [rows] = await db.query(query, [username]);
  return rows;
}

async function getAll() {
  let query = "SELECT * FROM Users;";
  let [rows] = await db.query(query);
  return rows;
}

const PORT = process.env.PORT || 8000;
app.listen(PORT);