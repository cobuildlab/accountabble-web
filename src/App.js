import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//landing
import Landing from './modules/Landing/landing'
//About us
import AboutUs from './modules/about-us/about-us'
//FAQ
import Faq from './modules/faq/faq'


export default class App extends Component {

    render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/faq' component={Faq}/>
        </Switch>
      </BrowserRouter>

    );
  }

}
