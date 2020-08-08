import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../HOCs/Auxilary/Auxilary';
import classes from '../Sidedrawer/Sidedrawer.css';


const sidedrawer = (props) => {
    let attachedClasses = [classes.sidedrawerCSS, classes.closeCSS];

    if (props.open) {
        attachedClasses = [classes.sidedrawerCSS, classes.openCSS];
    }


    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked} />
            <div className= {(props.open ? 'sidedrawerCSS openCSS' : 'sidedrawerCSS closeCSS')}>
                <Logo height="50px" />
                <Navigation />
            </div>
        </Aux>
    );
}


export default sidedrawer;