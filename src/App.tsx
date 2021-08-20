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
      </Switch>
    </BrowserRouter>
  )
}

export default App
