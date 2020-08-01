import React from 'react';
import Aux from '../../HOCs/Auxilary/Auxilary';
import styled from 'styled-components';

// styled-component for the components of layout
const StyledLayout = styled.main`
margin-top: 16px;
`;

const layout = (props) => {
    return(
        <Aux>
            <div>
                Toolbar, Sidebar, Backdrop
            </div>
            <StyledLayout>
                {props.children}
            </StyledLayout>
        </Aux>
    );
}

export default layout;

