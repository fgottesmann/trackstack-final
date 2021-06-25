import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import RegisterPage from './pages/Registerpage/Registerpage';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/Registerpage', Component: RegisterPage },
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
