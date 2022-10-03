const express = require('express');

const app = express()

app.get('/greeting/:name', function(req, res) {
    res.send('<h1>Hello, Gregory! It is so great to see you!</h1>');
});


app.listen(3000, function() {
console.log('Listening on port 3000');
});