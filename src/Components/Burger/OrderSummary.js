import React from 'react';
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder';
import Aux from '../../HOCs/Auxilary/Auxilary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredientName, index) => {
        return <li key={ingredientName+index}>{ingredientName}: {props.ingredients[ingredientName]} </li>
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>This Burger will specially made for you, using these ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );
}

export default orderSummary;