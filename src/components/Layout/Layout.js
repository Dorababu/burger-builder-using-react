import React from 'react';
import Aux from '../../hoc/Aux';
import classses from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>toolbar, sidebar, backdrop</div>
        <main className={classses.Content}>{props.children}</main>
    </Aux>
);

export default layout;