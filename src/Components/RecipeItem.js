import React, {Component} from 'react';
import {favoriteRecipe, removeFavorite} from '../Actions';
import {connect} from 'react-redux';

class RecipeItem extends Component{
    constructor(){
        super();

        this.state={
            favorited: false
        }
    }

    favorite(recipe) {
        this.props.favoriteRecipe(recipe);
        //this.props.favorited(recipe);
        this.setState({favorited: true});
        var x = document.getElementById("favSnack");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);    
    }

    unfavorite(recipe) {
        this.props.removeFavorite(recipe);
        this.setState({favorited: false});
        var x = document.getElementById("unFavSnack");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    render(){
        let {recipe} = this.props;
        return(
            <div className='recipe-item'>
                {
                    this.props.favoriteButton ?
                        this.state.favorited ?
                            <div className='star'>&#9733;</div>
                        :
                            <div className='star' onClick={()=>this.favorite(recipe)}>
                                &#9734;
                            </div>
                    :
                        <div className='minus' onClick={()=>this.unfavorite(recipe)}>
                            -
                        </div>
                }
                <div className='recipe-text'>
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img src={recipe.thumbnail} alt={recipe.title} className='recipe-image' />
            </div>
        )
    }
}

export default connect(null, {favoriteRecipe, removeFavorite})(RecipeItem);