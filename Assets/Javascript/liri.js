let enviornment = require("dotenv").config();
//.. Key.js content to be stored in this variable
let keys = require("./key");
//..Access to information
let spotify = new spotify(keys.spotify);