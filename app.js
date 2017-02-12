const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
// declare static content
app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));

// make our server read json data sent to it 
app.use(bodyParser.json());

app.get('/', (request, response) => {
      response.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})