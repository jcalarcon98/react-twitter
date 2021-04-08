import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            path='/auth'
            component={ AuthRouter }/>

          <Route 
            exact
            path='/'
            component={ MainPage }/>

          <Redirect to='/auth/login'/>
        </Switch>
      </div>
    </Router>
  );
};
