let dotEnv = require("dotenv").config();
let keys = require("./keys");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let command = process.argv[2];
let search = process.argv[3];
//..
function action(){
    switch (command) {
        case "spotify-this-song":
        spotifyThis(search);
        break;
    }
};
function spotifyThis(search){
    let searchTrack;
    if (command === undefined){
        searchTrack = "The Sign Ace of Base";
    } else {
        searchTrack = search;
    }
    spotify.search({
        type: 'track',
        query: 'All the Small Things'},
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
        console.log(data);
    });
};
action();