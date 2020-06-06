let enviornment = require("dotenv").config();
//.. Key.js content to be stored in this variable
let keys = require("./key");
//..Access to information
let spotify = new spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});
spotify.search({type:'track',query:'All the Small Things'}, function(error, data){
    if (error){
        return console.log('Error Ocurred' + error);
    }
    console.log(data);
});