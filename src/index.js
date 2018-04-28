import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoriteRecipe from './Components/FavoriteRecipe';


const store=createStore(rootReducer);
store.subscribe(()=> console.log('store ',store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/favorites' component={FavoriteRecipe} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
