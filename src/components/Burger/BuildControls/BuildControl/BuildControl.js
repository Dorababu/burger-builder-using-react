import React from 'react';
import classses from './BuildControl.css'

const buildControl = (props) => (
    <div className={classses.BuildControl}>
        <div className={classses.Label}>{props.label}</div><span className={classses.Price}>${props.price.toFixed(2)}</span>
        <button className={classses.More} onClick={props.added}>+</button>
        <button className={classses.Less} onClick={props.removed} disabled={props.disabled}>-</button>
    </div>
);

export default buildControl;