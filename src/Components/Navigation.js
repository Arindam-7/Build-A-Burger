import React from 'react';
import styled from 'styled-components';


// styling
const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%; 

    > li {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        height: 100%;

        > a {
            color: white;
            text-decoration: none;
            height: 100%;
            padding: 16px 10px;
            border-buttom: 4px solid transparent;
            box-sizing: border-box;
            display: block;

            &:hover {
                background-color: #8F5C2C;
                border-bottom: 4px solid #40A4C8;
                color: white;
            }

            &:nth-child(1) {
                background-color: #8F5C2C;
                border-bottom: 4px solid #40A4C8;
                color: white;
            }
        }
    }
`;



const navigation = () => {
    return(
        <StyledList>
            <li>
                <a href="#">Burger Builder</a>
                <a href="#">Checkout</a>
            </li>
        </StyledList>
    );
}


export default navigation;

