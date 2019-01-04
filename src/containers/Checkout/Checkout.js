import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
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

    componentDidMount() {
        const ingredients = {};
        const params = this.props.location.search.substring(1, this.props.location.search.length).split('&');
        const paramsSize = params.length;
        params.forEach((el,index) => {
            const param = el.split('=');
            if (paramsSize !== index+1) {
                ingredients[param[0]] = +param[1];
            } else {
                this.setState({totalPrice:+param[1]});
            }
           
        });
        this.setState({ ingredients: ingredients });
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/order-info');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    checkoutContinue={this.checkoutContinueHandler}
                    checkoutCancel={this.checkoutCancelHandler} />
            </div>
        );
    }
}

export default Checkout;