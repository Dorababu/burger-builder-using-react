import React from 'react';
import classses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classses.Toolbar}>
        <Navigation />
        <Logo />
        <nav>Menu</nav>
    </header>
);

export default toolbar;