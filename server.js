const express = require('express');

const app = express()

// app.get('/greeting/:name', function(req, res) {
//     res.send('<h1>Hello, Gregory! It is so great to see you!</h1>');
// });

app.get('/tip/:total/:tipPercentage', (req, res)=> {const {total, tipPercentage} = req.params
    res.send(`Your tip will be ${tipPercentage}`);
});


app.listen(3000, function() {
console.log('Listening on port 3000');
});