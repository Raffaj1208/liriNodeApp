//..
console.logZ("This is loaded");
//..
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
//..
let spotify = require('node-spotify-api');
