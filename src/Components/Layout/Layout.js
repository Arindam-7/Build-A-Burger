import React from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import Sidedrawer from '../Sidedrawer';


// styled-component for the components of layout
const StyledLayout = styled.main`
margin-top: 66px;
`;


const layout = (props) => {
    return(
        <Aux>
            <Toolbar />
            <Sidedrawer />
            <StyledLayout>
                {props.children}
            </StyledLayout>
        </Aux>
    );
}

export default layout;

