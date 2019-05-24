import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingView from './modules/landing/LandingView';
import AboutUsView from './modules/about-us/AboutUSView';
import FaqView from './modules/faq/FaqView';
import Plan from './modules/plan/Plan';
import TermsView from './modules/terms/TermsView';
import SucessView from './modules/register/SucessView';

const routes = [
  { component: LandingView, path: '/' },
  { component: SucessView, path: '/success' },
  { component: TermsView, path: '/terms-and-conditions' },
  { component: Plan, path: '/plan' },
  { component: FaqView, path: '/faq' },
  { component: AboutUsView, path: '/about-us' },
  /** { component: BlogDetailView, path: '/blog-posts/:id } */
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => <Route exact path={route.path} component={route.component} key={route.path} />)}
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;