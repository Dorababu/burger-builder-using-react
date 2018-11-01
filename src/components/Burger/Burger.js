import React from 'react';

import classses from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(
        type => {
            return [...Array(props.ingredients[type])].map((_, i) => {
                return <BurgerIngredient key={type + i} type={type} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Start adding ingredients !!!</p>;
    }
    return (
        <div className={classses.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredients}
            <BurgerIngredient type='bread-bottom' />
            <p className={classses.OrderTotal}>Order Total : $ {props.totalPrice.toFixed(2)} </p>
        </div>
    );
}
export default burger;