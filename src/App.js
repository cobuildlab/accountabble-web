import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LandingView from "./modules/landing/LandingView";
import AboutUsView from "./modules/about-us/AboutUSView";
import FaqView from "./modules/faq/FaqView";
import Plan from "./modules/plan/Plan";
import TermsView from "./modules/terms/TermsView";
import SuccessView from "./modules/register/SucessView";
import ContactUsView from "./modules/contact-us/ContactUsView";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const routes = [
  {component: LandingView, path: "/"},
  {component: SuccessView, path: "/success"},
  {component: TermsView, path: "/terms-and-conditions"},
  {component: Plan, path: "/plan"},
  {component: FaqView, path: "/faq"},
  {component: AboutUsView, path: "/about-us"},
  {component: ContactUsView, path: '/contact-us'}
];


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={i}
              />
            ))}
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
        <ToastContainer
          className='toast-container'
          toastClassName="dark-toast"
        />
      </>
    );
  }
}

export default App;
