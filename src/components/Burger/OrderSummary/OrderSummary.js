import React, { Component } from 'react';

import classes from './OrderSummary.css'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('Updated...')
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((key) => {
                return (
                    <tr key={key} className={classes.Row}>
                        <td className={classes.Label}>{key}</td>
                        <td className={classes.Quantity}>{this.props.ingredients[key]}</td>
                        <td className={classes.ItemPrice}>$ {this.props.priceList[key].toFixed(2)}</td>
                        <td className={classes.Price}>$ {(this.props.priceList[key] * this.props.ingredients[key]).toFixed(2)}</td>
                    </tr>
                )
            });
        return (
            <div className={classes.Container}>
                <h3 className={classes.Title}>Order Summary</h3>
                <p>Your burger is ready with following ingredients !!!</p>
                <table className={classes.OrderSummary} cellPadding='0' cellSpacing='0'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                            <th className={classes.Center}>Price</th>
                            <th className={classes.Center}>Item Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientsSummary}
                        <tr key='base-price' className={classes.Row}>
                            <td className={classes.Label}>Base Price</td>
                            <td className={classes.Quantity}>1</td>
                            <td className={classes.ItemPrice}>$ 4.00</td>
                            <td className={classes.Price}>$ 4.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className={classes.Footer}><td colSpan='3'>Order Total</td><td className={classes.CartTotal}>$ {this.props.totalPrice.toFixed(2)}</td></tr>
                    </tfoot>
                </table>
                <p className={classes.ContinueLabel}>Please click continue to complete your order !!!</p>
                <Button btnType='Danger' clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continueOrder}>CONTINUE</Button>
            </div>
        );
    }
}

export default OrderSummary;