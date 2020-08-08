import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    cursor: pointer;
`;


const drawerToggler = (props) => (
    <DIV onClick={props.toggled}>Menu</DIV>
);


export default drawerToggler;