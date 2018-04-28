import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class FavoriteRecipe extends Component{
    render(){

        return(
            <div>
                <h4 className='link'><Link to='/'>Home</Link></h4>
                <h4>Favorite Recipe</h4>
                {
                    this.props.favoriteRecipe.map((recipe,index) =>{
                        return(
                            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        favoriteRecipe: state.favoriteRecipe
    }
}

export default connect(mapStateToProps,null) (FavoriteRecipe);