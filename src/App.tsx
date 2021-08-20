import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Products } from './components/Products';

import * as Routes from './constants/routes';

function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Switch>
        <Route exact path={Routes.HOME} component={Home} />

        <Route exact path={Routes.PRODUCTS} component={Products} />

        <Route exact path={Routes.PRODUCT}>
          <h1>Olá, veja aqui o detalhe desse produto</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
