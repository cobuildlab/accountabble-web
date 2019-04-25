import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//landing
import Landing from './modules/Landing/landing'
//About us
import AboutUs from './modules/about-us/about-us'
//FAQ
import Faq from './modules/faq/faq'
//Plan
import Plan from './modules/plan/plan'
//Terms & conditions
import Terms from './modules/terms/terms'


export default class App extends Component {

    render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/faq' component={Faq}/>
          <Route exact path='/plan' component= {Plan}/>
          <Route exact path='/terms' component= {Terms}/>
        </Switch>
      </BrowserRouter>

    );
  }

}
