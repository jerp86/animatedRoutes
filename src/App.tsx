import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Menu, Product, Products } from './components';

import * as Routes from './constants/routes';

function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.PRODUCTS} component={Products} />
        <Route exact path={Routes.PRODUCT} component={Product} />

            <Route exact path={Routes.BUY}>
              <AbsoluteWrapper>
                <h1>Congrats</h1>
                <h2>Make good use of your purchase!</h2>
              </AbsoluteWrapper>
            </Route>

            <Route path="*" component={() => (
              <AbsoluteWrapper>
                <h1>404</h1>
              </AbsoluteWrapper>
            )} />
          </Switch>
    </BrowserRouter>
  )
}

export default App
