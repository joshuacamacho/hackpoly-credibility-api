const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true}));
// declare static content
app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));

// make our server read json data sent to it 
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

// All user data being requested from the API
app.get('/users', (request, response) => {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
        if (err) { console.log('oops, something went wrong ' + err )};
        console.log( data );
        response.end( data );
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})