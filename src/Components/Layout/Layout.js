import React, {Component} from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import Sidedrawer from '../Sidedrawer/Sidedrawer';


// styled-component for the components of layout
const StyledLayout = styled.main`
margin-top: 66px;
`;


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false}); 
    }

    toggle = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return(
            <Aux>
            <Toolbar toggleClicked={this.toggle} /> 
            <Sidedrawer open={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler} />
            <StyledLayout>
                {this.props.children}
            </StyledLayout>
        </Aux>
        );
    }
}

export default Layout;

