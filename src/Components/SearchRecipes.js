import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../Actions';

class SearchRecipes extends Component{
    constructor(){
        super();

        this.state= {
            ingredients: '',
            dish: ''
        }
    }

    search(){
        let { ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        //console.log('state: ',this.state,' url: ',url);

        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(json =>{
            this.props.setRecipes(json.results)
        });
    }

    render(){
        return(
            <Form id='search'>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl type='text' placeholder='Garlic, Chicken' 
                    onChange={event=>this.setState({ ingredients: event.target.value})}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl type='text' placeholder='Adobo' 
                    onChange={event=>this.setState({ dish: event.target.value})}
                    />
                </FormGroup>
                {' '}
                <Button onClick={()=>this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, {setRecipes}) (SearchRecipes);