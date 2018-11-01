import React from 'react';
import classses from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Veg Patty', type: 'veg_patty' },
    { label: 'Chicken Patty', type: 'chicken_patty' },
    { label: 'Salad', type: 'salad' }];
const buildControls = (props) => (
    <div className={classses.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label} label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabledButton[ctrl.type]}
                price={props.priceList[ctrl.type]}
            />
        ))}
        <button className={classses.OrderButton} disabled={!props.orderNow} onClick={props.completeOrder}>ORDER NOW</button>
    </div>
);

export default buildControls;