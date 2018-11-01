import React, { Component } from 'react';
import classses from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classses.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classses.BreadTop}>
                        <div className={classses.Seeds1}></div>
                        <div className={classses.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classses.Meat}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classses.Salad}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classses.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classses.Bacon}></div>;
                break;
            default:
                ingredient = '';
                break;
        }
        return ingredient;
    }
}

BurgerIngredient.prototypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;