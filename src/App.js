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

    toggleHandler = (index) => {
      console.log("Button clicked");
    }

    render () {
        return (
            <div className="container">
                <Categories 
                  name={this.state.categories[0].name} 
                  click={this.toggleHandler}/><br />
                <Categories 
                  name={this.state.categories[1].name} 
                  click={this.toggleHandler}/><br />
                <Categories 
                  name={this.state.categories[2].name} 
                  click={this.toggleHandler}/><br />
                <Categories 
                  name={this.state.categories[3].name} 
                  click={this.toggleHandler}/><br />
                <Categories 
                  name={this.state.categories[4].name} 
                  click={this.toggleHandler}/>
            </div>  
        )
    }
}
export default App;
