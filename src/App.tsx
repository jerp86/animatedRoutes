import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import * as Routes from './constants/routes';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME}>
          <h1>Seja bem vindo ao nosso website!</h1>
        </Route>

        <Route exact path={Routes.PRODUCTS}>
          <h1>Olá, eu sou a página de produtos</h1>
        </Route>

        <Route exact path={Routes.PRODUCT}>
          <h1>Olá, veja aqui o detalhe desse produto</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
