import React from 'react';
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder';
import Aux from '../../HOCs/Auxilary/Auxilary';
import styled from 'styled-components';

// styling of continue and cancel button
const StyledContinue = styled.button`
    background-color: transparent;
    border: none;
    color: green;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
`;

const StyledCancel = styled.button`
    background-color: transparent;
    border: none;
    color: red;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
`;


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
            <strong>Total Price: ${props.totalPrice.toFixed(2)} </strong>
            <p>Continue to checkout?</p>
            <StyledContinue onClick={props.continue}>Continue</StyledContinue>
            <StyledCancel onClick={props.cancel}>Cancel</StyledCancel>
        </Aux>
    );
}

export default orderSummary;