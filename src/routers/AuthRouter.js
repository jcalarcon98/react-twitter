import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from '../pages/auth/LoginPage';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/auth/login' component={ LoginPage } />

        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};
