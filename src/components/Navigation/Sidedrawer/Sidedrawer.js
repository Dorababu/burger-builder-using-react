import React from 'react';

import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'

const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} close={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <Logo height='10%' />
                <nav>
                    <Navigation />
                </nav>
            </div>
        </Aux>
    );
};

export default sidedrawer;