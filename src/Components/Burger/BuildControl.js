import React from 'react';
import styled from 'styled-components';
import buildControls from './BuildControls';

// styling

const StyledButton = styled.button`
`;

const LessButton = styled.button`
`;

const MoreButton = styled.button`
`;

const StyledControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;

    & > StyledButton {
        & {
        display: block;
        font: inherit;
        padding: 5px;
        margin: 0 5px;
        width: 80px;
        border: 1px solid #AA6817;
        cursor: pointer;
        outline: none;
    }

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }

    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }

    & > LessButton {
    background-color: #D39952;
    color: white;

        &:hover{
            background-color: #DAA972;
            color: white;
        }

        &:active{
            background-color: #DAA972;
            color: white;
        }

    }

    & > MoreButton {
        background-color: #8F5E1E;
        color: white;

        &:active{
            background-color: #99703F;
            color: white;
        }

        &:hover{
            background-color: #99703F;
            color: white;
        }
    }

    }
`;

const StyledLabel = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;


const buildControl = (props) => (
    <StyledControl>
        <StyledLabel>{props.label}</StyledLabel>
        <LessButton>Less</LessButton>
        <MoreButton>More</MoreButton>
    </StyledControl>
);

export default buildControl;