import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// styling of bread-bottom
const BreadBottom = styled.div`
    height: 13%;
    width: 80%;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
`;

//styling of bread-top
const BreadTop = styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`;

// styling of SeedsOne and SeedsTwo
const SeedsOne = styled.div`
    &{
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 30%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #c9c9c9;
    }

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -170%;
        top: -260%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px 2px #c9c9c9;
      }
      
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 180%;
        top: -50%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px -3px #c9c9c9;
      }

`;

const SeedsTwo = styled.div`
    &{
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9c9c9;
    }

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #c9c9c9;
      }
`;

// styling of Meat
const Meat = styled.div`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
`;

// styling of Cheese
const Cheese = styled.div`
    width: 90%;
    height: 4.5%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
`;

// styling of Bacon
const Bacon = styled.div`
    width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
`;

// styling of Salad
const Salad = styled.div`
    width: 85%;
    height: 7%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`;


class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <BreadBottom></BreadBottom>;
                break;
            case ('bread-top'):
                ingredient = (<BreadTop>
                                <SeedsOne></SeedsOne>
                                <SeedsTwo></SeedsTwo>
                            </BreadTop>);
                break;
            case ('meat'):
                    ingredient = <Meat></Meat>;
                    break;
            case ('cheese'):
                    ingredient = <Cheese></Cheese>;
                    break;
            case ('bacon'):
                    ingredient = <Bacon></Bacon>;
                    break;
            case ('salad'):
                    ingredient = <Salad></Salad>;
                    break;
            default:
                    ingredient = null; 
        }
      return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredients;