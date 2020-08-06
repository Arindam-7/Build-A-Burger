import React from 'react';
import styled from 'styled-components';


// styling
const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;

    > li {
        margin: 10px 0;
        padding: 0;
        display: block;
        width: 100%;

        > a {
            color: brown;
            text-decoration: none;
            width: 100%;
            box-sizing: border-box;
            display: block;

            &:hover {
                color: #40A4C8;
            }

            &:nth-child(1) {
                color: #40A4C8;
            }
        }
    }

    @media(min-width: 500px) {
        flex-flow: row;
        
        > li {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            height: 100%;
            width: auto;
    
            > a {
                color: white;
                text-decoration: none;
                height: 100%;
                padding: 16px 10px;
                border-buttom: 4px solid transparent;
                box-sizing: border-box;
                display: flex;
                align-items: center;
    
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

