import React from 'react';
import classses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems'
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height='80%' />
        <nav className={classses.DesktopOnly}>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;