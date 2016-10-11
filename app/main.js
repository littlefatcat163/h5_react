import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style.scss";
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import TestScrollBar from "./test/TestScrollBar.jsx";

(function(){
  ReactDom.render((
     <Router history={hashHistory}>
        <Route path="/" component={TestScrollBar}>
        </Route>
     </Router>
  ), document.getElementById("app"));
}())
