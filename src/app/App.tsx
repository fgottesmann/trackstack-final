import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import RegisterPage from './pages/Registerpage/Registerpage';
import Splashpage from './pages/Splashpage/Splashpage';
import Trackpage from './pages/Trackpage/Trackpage';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/tracks/:id', Component: Trackpage },
  { path: '/register', Component: RegisterPage },
  { path: '/', Component: Splashpage },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
