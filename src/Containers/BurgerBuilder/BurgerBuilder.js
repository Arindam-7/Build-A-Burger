import React, {Component} from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';

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
        ingredients : {
            salad: 1,
            meat: 3,
            bacon: 1,
            cheese: 2
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Builder Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;