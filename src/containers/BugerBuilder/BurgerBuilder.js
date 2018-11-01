import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.8, meat: 2, bacon: 1 };

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        isCartEmpty: false
    }

    orderHandler = (ingredientsAdded) => {
        const sum = Object.values(ingredientsAdded).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({isCartEmpty : sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const ingredientsUpdated = { ...this.state.ingredients };
        ingredientsUpdated[type] = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ totalPrice: newPrice, ingredients: ingredientsUpdated });
        this.orderHandler(ingredientsUpdated);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const ingredientsUpdated = { ...this.state.ingredients };
            ingredientsUpdated[type] = oldCount - 1;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type];
            this.setState({ totalPrice: newPrice, ingredients: ingredientsUpdated });
            this.orderHandler(ingredientsUpdated);
        }
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledButton={disabledInfo}
                    priceList={INGREDIENT_PRICES}
                    orderNow={this.state.isCartEmpty}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;