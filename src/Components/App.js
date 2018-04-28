import React, {Component} from 'react';
import SearchRecipes from './SearchRecipes';
import '../Styles/index.css';
import RecipeList from './RecipeLIst';
//import FavoriteRecipe from './FavoriteRecipe';

class App extends Component {
    
    render(){
        return (
            <div>
                <h2>RecipeFinder</h2>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }
}

export default App;