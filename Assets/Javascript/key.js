//..
console.logZ("This is loaded");
//..
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
//..
let spotify = require('node-spotify-api');
let spotify = new spotify({
    id: SPOTIFY_ID,
    secret: SPOTIFY_SECRET
});
spotify.search({type:'track',query:'All the Small Things'}, function(error, data){
    if (error){
        return console.log('Error Ocurred' + error);
    }
    console.log(data);
});