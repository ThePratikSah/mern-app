const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()


const app = express();

// body parser middleware

app.use(bodyParser.json());

// mongodb uri
const db = process.env.MONGO_URI;