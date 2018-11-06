import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate () {
        console.log('Modal Updated')
    }
    
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} close={this.props.closeModal} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        transitionDuration: '1s'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;