import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingView from './modules/landing/LandingView'
import AboutUsView from './modules/about-us/AboutUSView'
import Faq from './modules/faq/faq'
import Plan from './modules/plan/plan'
import Terms from './modules/terms/terms'
import SucessView from './modules/register/SucessView';

const routes = [
  { component: LandingView, path: '/' },
  { component: SucessView, path: '/success' },
  { component: Terms, path: '/terms-and-conditions' },
  { component: Plan, path: '/plan' },
  { component: Faq, path: '/faq' },
  { component: AboutUsView, path: '/about-us' },
];

export default class App extends Component {

    render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => <Route exact path={route.path} component={route.component} key={route.path} />)}
        </Switch>
      </BrowserRouter>

    );
  }

}
