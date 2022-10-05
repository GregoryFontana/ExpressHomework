
// const app = express();

// const fruits = ['apple', 'banana', 'pear'];

// app.get('/fruits', (req, res) => {
//     res.send(fruits);
// });

// app.listen(3000, () => {
//     console.log('listening to 3000');
// });

// const express = require('express')

// 

const express = require('express');
const morgan = require('morgan')
const fruits = require('./models/fruits')
const veggies = require('./models/fruits')

//App Init
const app = express()
const PORT = 3000

//Middleware
app.use(morgan('dev'))

//JSX Settings
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//const fruits = ['apple', 'banana', 'pear'];



//Routes

//Route Route
app.get('/', (req, res) => {
    res.send('Welcome')
})

//Index Route: get all fruits
app.get('/fruits', (req, res) => {
    //res.send(fruits);
    res.render('Index', {fruits: fruits} )
});

//Index Route: get all veggies
app.get('/veggies', (req, res) => {
    //res.send(veggies);
    res.render('veggies/Index', {veggies: veggies} )
});

//Show Route: show a single fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const {indexOfFruitsArray} = req.params
    //res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('fruits/Show', { //second param must be an object
       // fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
       fruit: fruits[indexOfFruitsArray],
       date: new Date().getFullYear()
    });
});

//Show Route: show a single veggie
app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
    const {indexOfVeggiesArray} = req.params
    res.render('veggies/Show', {
        fruit: fruits[indexOfVeggiesArray],
        date: new Date().getFullYear()
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})