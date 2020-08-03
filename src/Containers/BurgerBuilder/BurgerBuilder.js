import React, {Component} from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls';

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
            salad: 1,
            meat: 1,
            bacon: 2,
            cheese: 1
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;