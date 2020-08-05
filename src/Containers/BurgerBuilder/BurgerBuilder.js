import React, {Component} from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls';
import Modal from '../../UI/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary';


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
        totalPrice: 3,
        purchasable: false
    }

    updatePurchasableState = (ingredients) => {
        const totalQuantity = Object.keys(ingredients).map(quantity => {
            return ingredients[quantity];
        }).reduce((accumulator, quantity) => {
            return accumulator+quantity;
        }, 0)

        // console.log(this.updatePurchasableState);

        this.setState({
            purchasable: totalQuantity > 0
        })
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

    // to check whether the order is purchasable or not 
        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        if(prevCount <= 0) {
            return;
        }
        const updatedCount = prevCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        let prevPrice = this.state.totalPrice;
        const priceDeduction = priceOfIngredients[type];
        let renewedPrice = prevPrice - priceDeduction;
        this.setState({
            totalPrice: renewedPrice, ingredients: updatedIngredients
        })

    // to check whether the order is purchasable or not 
        this.updatePurchasableState(updatedIngredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key]<=0 ? (
                disabledInfo[key] = true
            ) : (
                disabledInfo[key] = false
            )
        }

        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice} 
                    disabled={disabledInfo} 
                    addedIngredient={this.addIngredientHandler} 
                    removedIngredient={this.removeIngredientHandler} 
                    purchasableProps={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;