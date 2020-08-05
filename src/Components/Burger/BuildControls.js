import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';


// styling
const StyledControls = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

const StyledPrice = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: red;
`;

// styling of order button

const OrderButton = styled.button`
    &{
        background-color: #DAD735;
        outline: none;
        cursor: pointer;
        border: 1px solid #966909;
        color: #966909;
        font-family: inherit;
        font-size: 1.2em;
        padding: 15px 30px;
        box-shadow: 2px 2px 2px #966909;
    }

    &:hover{
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    &:active{
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    &:disabled{
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;



const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
];


const buildControls = (props) => (
    <StyledControls>
        <StyledPrice>
           Current Price of the Burger: ${props.price.toFixed(2)}
        </StyledPrice>

        {controls.map(ctrl => {
            return <BuildControl disabled={props.disabled[ctrl.type]} removed={() => props.removedIngredient(ctrl.type)} added={() => props.addedIngredient(ctrl.type)} key={ctrl.label} label={ctrl.label} />
        })}
        <OrderButton onClick={props.ordering} disabled={!props.purchasableProps}>Order Now</OrderButton>
    </StyledControls>
);


export default buildControls;