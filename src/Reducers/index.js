import {combineReducers} from 'redux';
import {SET_RECIPES, FAVORITE_RECIPE, REMOVE_FAVORITE} from '../Actions';

function recipes(state=[], action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipe(state=[], action){
    switch(action.type){
        case FAVORITE_RECIPE:
            //console.log("hi");
            state = [...state,action.recipe]
            return state;
        case REMOVE_FAVORITE:
            //console.log(action.type);
            let fav=state.filter( item=> item.title!==action.recipe.title);
            return fav;
        default:
            return state;
    }
}

// function removeFavorite(state=[],action){
//     switch(action.type){
//         case REMOVE_FAVORITE:
//             state=state.filter( item=> item.title!==action.title);
//             return state;
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({ recipes, favoriteRecipe });

export default rootReducer;