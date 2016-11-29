import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style/style.scss";
import "./aid/font-awesome-4.7.0/scss/font-awesome.scss";
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import Test1 from "./test/Test1.jsx";

const rootRouter = {
  path : "/",
  indexRoute : {
    onEnter : (nextState, replace) => replace("/home")
  },
  childRoutes : [
    {
      path : "/home",
      //indexRoute : {
        getComponent(nextState, callback) {
          require.ensure([], (require) => {
            callback(null, require("./Home.jsx").default)
          }, "Home");
        },
    //  },
      childRoutes : [
        {
          path : "/home/:id",
          getComponent(nextState, callback) {
            require.ensure([], (require) => {
              callback(null, require("./HomeNavigate.jsx").default)
            }, "HomeNavigate")
          }
        }
      ]
    }
  ]
};

(function(){
  ReactDom.render((
    <Router
      history={hashHistory}
      routes={rootRouter}
    />
  ), document.getElementById("root"))
}())

// (function(){
//   ReactDom.render((//browserHistory 打包后压缩无效
//      <Router history={hashHistory}>
//         <Route path="/">
//           <IndexRedirect to="/home" />
//           <Route path="/home"
//                 getComponent={(location, callback) => {
//                   require.ensure([], function(require) {
//                     callback(null, require("./Home.jsx").default);
//                   }, "Home")
//                 }}
//           >
//             {/* <IndexRoute
//               getComponent={(location, callback) => {
//                 require.ensure([], function(require) {
//                   callback(null, require("./Home.jsx").default);
//                 }, "Home")
//               }}
//             >
//             </IndexRoute> */}
//             <Route
//               path="nav/:id"
//               getChildRoutes={(location, callback) => {
//                 require.ensure([], function(require) {
//                   callback(null, require("./HomeNavigate.jsx").default);
//                 }, "HomeNavigate")
//               }}
//             ></Route>
//           </Route>
//         </Route>
//
//         <Route path="/t" component={Test1}>
//           <Route
//             path="/tc"
//             getComponent={(location, callback) => {
//               require.ensure([], function (require) {
//                 callback(null, require("./test/TestScrollBar.jsx").default);
//               }, 'TestScrollBar')
//             }}
//            >
//            <Route
//              path="/tr"
//              getComponent={(location, callback) => {
//                require.ensure([], function (require) {
//                  callback(null, require("./test/TestRedux.jsx").default);
//                }, 'TestRedux')
//              }}
//             ></Route>
//            </Route>
//         </Route>
//      </Router>
//   ), document.getElementById("root"));
// }())
