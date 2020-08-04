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
    </StyledControls>
);


export default buildControls;