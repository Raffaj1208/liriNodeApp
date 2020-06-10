let dotEnv = require("dotenv").config();
let keys = require("./keys");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let command = process.argv[2];
let songName = process.argv[3];
//.. 
function action(){
    switch (command) {
        case "spotify-this-song":
        spotifyThis();
        break;
    }
};

function spotifyThis(){
    let searchTrack;
    if (songName === undefined){
        searchTrack = "The Sign Ace of Base";
    } else {
        searchTrack = songName;
    }
    spotify.search({
        type: 'track',
        query: searchTrack},
        function(error, data){
        if (error){
            return console.log('Error occurred:' + error);
        } else {
            console.log("\n---------------------------------------------------\n");
            console.log("Artist:" + data.tracks.items[0].artists[0].name);
            console.log("Song:" + data.tracks.items[0].name);
            console.log("Preview:" + data.tracks.items[3].preview_url);
            console.log("Album:" + data.tracks.items[0].album.name);
            console.log("\n---------------------------------------------------\n");
        }
    });
};
//..
function read(){
    let fileRead = function() {
        fs.readFile("keys.js", "utf8", function(error, data) {
            console.log(data);
            let dataArray = data.split(",");

        });
    }
};
action();