import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';


// styling
const StyledSidedrawer = styled.div`
    position: fixed;
    width: 200px;
    max-width: 80%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media(min-width: 500px){
        display: none;
    }  

/*   
    .Open {
        transform: translateX(0);
    }

    .Close {
        transform: translateX(-100);
    }  
*/

`;



const sidedrawer = () => {
    return (
        <StyledSidedrawer>
            <Logo height="10%" />
            <Navigation />
        </StyledSidedrawer>
    );
}


export default sidedrawer;