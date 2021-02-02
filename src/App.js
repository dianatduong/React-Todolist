import React, { useState } from 'react'
import Categories from './Components/Categories'
import './App.css'

const App = () => {

  const [ categoriesState, setCategoriesState  ] = useState ({
      categories: [
         { name: "Produce" },
         { name: "Meat" },
         { name: "Dairy" },
         { name: "Frozen" },
         { name: "Pantry"}
       ]
  });
    
   const switchCategoryNameHandler = () => {
    setCategoriesState ({
        categories: [
          { name: "Dessert" },
          { name: "Bakery" },
          { name: "Deli" },
          { name: "Frozen" },
          { name: "Pantry"}
        ]
    })
  }
        return (
            <div className="container">
                <Categories
                  name={categoriesState.categories[0].name} 
                  click={switchCategoryNameHandler}/><br />
                <Categories 
                  name={categoriesState.categories[1].name} 
                  click={switchCategoryNameHandler}/><br />
                <Categories 
                  name={categoriesState.categories[2].name} 
                  click={switchCategoryNameHandler}/><br />
                <Categories 
                  name={categoriesState.categories[3].name} 
                  click={switchCategoryNameHandler}/><br />
                <Categories 
                  name={categoriesState.categories[4].name} 
                  click={switchCategoryNameHandler}/>
            </div>  
        )
    
}
export default App;
