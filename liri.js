let dotEnv = require("dotenv").config();
let keys = require("./keys");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
//..
spotify.search({type: 'track', query: 'All the Small Things'}, function(error, data){
    if (error){
        return console.log('Error occurred:' + error);
    }
    console.log(data);
});