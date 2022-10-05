const express = require('express');

const app = express()

app.get('/greeting/:name', function(req, res) {
    res.send('<h1>Hello, Gregory! It is so great to see you!</h1>');
});

app.get('/tip/:total/:tipPercentage', (req, res)=> {
    const {total, tipPercentage} = req.params
    res.send(`<h2>Because your total is ${total}, your tip will be ${tipPercentage}</h2>`);
});

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
console.log(eightBall)
app.get('/magic/:Will%20I%20get%20well%20soon', function (req, res){
//=> {const {WillIgetwellsoon} = req.params
    res.send(`<h1>Will I get well soon?</h1></br> Answer: ${eightBall[Math.floor(Math.random()*20)]}</h1>`);
}
);


app.listen(3000, function() {
console.log('Listening on port 3000');
});