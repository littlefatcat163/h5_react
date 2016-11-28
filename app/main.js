import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style/style.scss";
import "./aid/font-awesome-4.7.0/scss/font-awesome.scss";
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect } from 'react-router';
import Test1 from "./test/Test1.jsx";
//import Home from "./Home.jsx";

(function(){
  ReactDom.render((//browserHistory 打包后压缩无效
     <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute
            getComponent={(location, callback) => {
              require.ensure([], function(require) {
                callback(null, require("./Home.jsx").default);
              }, "Home")
            }}
          />
        </Route>
        <Route path="/t" component={Test1}>
          <Route
            path="/tc"
            getComponent={(location, callback) => {
              require.ensure([], function (require) {
                callback(null, require("./test/TestScrollBar.jsx").default);
              }, 'TestScrollBar')
            }}
           ></Route>
           <Route
             path="/tr"
             getComponent={(location, callback) => {
               require.ensure([], function (require) {
                 callback(null, require("./test/TestRedux.jsx").default);
               }, 'TestRedux')
             }}
            ></Route>
        </Route>
     </Router>
  ), document.getElementById("root"));
}())
