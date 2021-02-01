import React, {Component} from 'react'
import Categories from './Components/Categories'

class App extends Component {
    state = {
        categories: [
           { name: "Produce" },
           { name: "Meat" },
           { name: "Dairy" },
           { name: "Frozen" },
           { name: "Pantry"}
         ]
    }

    render () {
        return (
            <div className="container">
                <Categories name={this.state.categories[0].name} /><br />
                <Categories name={this.state.categories[1].name} /><br />
                <Categories name={this.state.categories[2].name} /><br />
                <Categories name={this.state.categories[3].name} /><br />
                <Categories name={this.state.categories[4].name} />
            </div>  
        )
    }
}
export default App;
