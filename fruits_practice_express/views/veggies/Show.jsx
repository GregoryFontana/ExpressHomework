const React = require('react')
    
class Show extends React.Component {
       render () {
        //console.log(this.props)
        //Receives the data from fruits.js
        const veggies = this.props.veggies
        const presentDate = this.props.date
        return (
        <div>
          <h1> Show Page, my man!!!! </h1>
          <h3>The vegetable name is {veggie.name} and the color is {veggies.color}.</h3>
        <h4>{veggies.readyToEat ? ` It is ready to eat` : `It is not ready to eat... Cant touch this`} </h4>
        <h6>Year:{presentDate}</h6>
      </div>
         );
        }
     }
     module.exports  = Show;