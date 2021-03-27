import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// components
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';


import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

// views without layouts
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";


//import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    {/* add routes with layouts */}
    <Route path="/admin" component={Admin} />
    <Route path="/auth" component={Auth} />
    {/* add routes without layouts */}
    <Route path="/landing" exact component={Landing} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/index" exact component={Index} />
    <Route path="/" exact component={App} />
    {/* add redirect for first page */}
    <Redirect from="*" to="/" />
  </Switch>
  </BrowserRouter>,
document.getElementById("root")
);