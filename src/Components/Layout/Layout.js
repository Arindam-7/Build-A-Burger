import React from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import styled from 'styled-components';
import Toolbar from '../Toolbar';


// styled-component for the components of layout
const StyledLayout = styled.main`
margin-top: 66px;
`;


const layout = (props) => {
    return(
        <Aux>
            <Toolbar />
            <StyledLayout>
                {props.children}
            </StyledLayout>
        </Aux>
    );
}

export default layout;

