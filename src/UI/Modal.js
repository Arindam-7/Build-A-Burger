import React, {Component} from 'react';
import styled from 'styled-components';
import Aux from '../HOCs/Auxilary/Auxilary';
import Backdrop from './Backdrop';


// styling for modal
const StyledModal = styled.div`
    &{
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
    }

    @media (min-width: 600px) {
        .Modal {
            width: 500px;
            left: calc(50% - 250px);
        }
`;


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] will update');
    }
     
    render () {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.clicked} />
                <StyledModal
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </StyledModal>
            </Aux>
        );
    }
}



export default Modal;