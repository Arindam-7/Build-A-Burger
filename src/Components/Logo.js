import React from 'react';
import styled from 'styled-components';
import imagePath from '../assets/images/burger-logo.png';


// styling
const StyledLogo = styled.div`
    height: 60%;
    padding: 8px;
    background-color: white;

    > img {
        height: 100%;
        width: auto;
    }
`;


const logo = (props) => (
    <StyledLogo style={{height: props.height}}>
        <img src={imagePath} alt="Burger Logo" />
    </StyledLogo>
);


export default logo;