import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from '../src/hoc/Layout/Layout'
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/' component={BurgerBuilder} exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
