import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import { AbsoluteWrapper, Home, Menu, Product, Products } from './components';

import * as Routes from './constants/routes';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate(100%,0)' },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' },
  });

  return (
    <>
      <Menu />

      {transitions((props, item) => (
        <animated.div style={props}>
          <Switch location={item}>
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
        </animated.div>
      ))}
    </>
  )
}

export default App
