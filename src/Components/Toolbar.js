import React from 'react';
import styled from 'styled-components';


// styling for toolbar
const StyledToolbar = styled.header`
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    > nav {
        height: 100%;
    }
`;


const toolbar = () => (
    <StyledToolbar>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </StyledToolbar>
);



export default toolbar;