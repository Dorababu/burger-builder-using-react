import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.8, chicken_patty: 2, veg_patty: 1 };

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            chicken_patty: 0,
            veg_patty: 0,
            cheese: 0
        },
        totalPrice: 4,
        isCartEmpty: false,
        completeOrder: false
    }

    orderHandler = (ingredientsAdded) => {
        const sum = Object.values(ingredientsAdded).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({isCartEmpty : sum > 0})
    }

    orderNowHandler = () => {
        this.setState({completeOrder:true});
    }

    cancelOrderhandler = () => {
        this.setState({completeOrder:false});
    }

    continueOrderHandler = () => {
        console.log('continue ...');
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
                <Modal show={this.state.completeOrder} closeModal={this.cancelOrderhandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        continueOrder={this.continueOrderHandler}
                        cancelOrder={this.cancelOrderhandler}
                        priceList={INGREDIENT_PRICES}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
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
                    completeOrder={this.orderNowHandler}

                />
            </Aux>
        );
    }
}

export default BurgerBuilder;