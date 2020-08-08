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
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render() {
        return(
            <Aux>
            <Toolbar />
            <Sidedrawer open={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler} />
            <StyledLayout>
                {this.props.children}
            </StyledLayout>
        </Aux>
        );
    }
}

export default Layout;

