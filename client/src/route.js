import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FibonacciPage } from './pages/FibonacciPage';
import { HistoryPage } from './pages/HistoryPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/fib" exact>
        <FibonacciPage />
      </Route>
      <Route path="/history" exact>
        <HistoryPage />
      </Route>
      <Redirect to="/fib" />
    </Switch>
  );
};
