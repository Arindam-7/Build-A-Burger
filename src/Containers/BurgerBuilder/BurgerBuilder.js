import React, {Component} from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls';


const priceOfIngredients = {
    salad: 0.1,
    meat: 1,
    bacon: 1,
    cheese: 0.5
}

class BurgerBuilder extends Component {
  /*  constructor(props){
        super(props);
        this.state = {
            ingredients : {
                salad: 1,
                meat: 3,
                bacon: 1,
                cheese: 2
            }
        }
    }  */

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 3
    }

    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const updatedCount = prevCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        let prevPrice = this.state.totalPrice;
        const priceAddition = priceOfIngredients[type];
        let renewedPrice = prevPrice + priceAddition;
        this.setState({
            totalPrice: renewedPrice, ingredients: updatedIngredients
        })
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addedIngredient={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;