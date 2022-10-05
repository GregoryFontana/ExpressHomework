const react = require('react')
const veggies = require('../../models/veggies')

class Index extends React.Component{
    render(){

        return(<div>
            <h1>
                All Veggies
            </h1>
            <ul>{veggies.map((veggie, idx) => {
            })}</ul>
        </div>)
    }
}

module.exports = Index