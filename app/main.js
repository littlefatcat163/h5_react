import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style.scss";
import "./components/scrollbar.scss";
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect } from 'react-router';
import Test1 from "./test/Test1.jsx";
//import TestScrollBar from "./test/TestScrollBar.jsx";

// function lazyLoadComponents(lazyModules) {
//   return (location, cb) => {
//     const moduleKeys = Object.keys(lazyModules);
//     const promises = moduleKeys.map(key =>
//       new Promise(resolve => lazyModules[key](resolve))
//     )
//
//     Promise.all(promises).then(modules => {
//       cb(null, modules.reduce((obj, module, i) => {
//         obj[moduleKeys[i]] = module;
//         return obj;
//       }, {}))
//     })
//   }
// }

(function(){
  ReactDom.render((
     <Router history={browserHistory}>
        {/*<Route path="/" component={TestScrollBar}>
          IndexRoute component={Index} />
          <Route path="first" component={First} />
          <Route path="second" component={Second} />
        </Route>*/}
        {/*<Route
          path="/"
          getComponent={(location, callback) => {
            require.ensure([], function (require) {
              callback(null, require("./test/TestScrollBar.jsx"));
            })
          }}
        />*/}
        <Route path="/" component={Test1}>
          <Route
            path="/tc"
            getComponent={(location, callback) => {
              require.ensure([], function (require) {
                callback(null, require("./test/TestScrollBar.jsx").default);
              }, 'TestScrollBar')
            }}
           />
        </Route>
     </Router>
  ), document.getElementById("app"));
}())
