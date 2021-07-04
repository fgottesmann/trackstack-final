import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import RegisterPage from './pages/Registerpage/Registerpage';
import Splashpage from './pages/Splashpage/Splashpage';
import Tracklist from './pages/Tracklist/Tracklist';
import Trackpage from './pages/Trackpage/Trackpage';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage/Loginpage';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/tracks/:id', Component: Trackpage },
  { path: '/login', Component: Loginpage },
  { path: '/register', Component: RegisterPage },
  { path: '/tracklist', Component: Tracklist },
  { path: '/home', Component: Homepage },
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
