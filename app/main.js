import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style/style.scss";
import "./aid/font-awesome-4.7.0/scss/font-awesome.scss";
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router';
//import { createStore, combineReducers } from 'redux';
//import { Provider, connect } from 'react-redux';
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
//import re from "./reducers/re";

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
          }, "home");
        },
    //  },
      childRoutes : [
        {
          path : "/home/:id/:name",
          getComponent(nextState, callback) {
            require.ensure([], (require) => {
              callback(null, require("./api/" + nextState.params.id + ".jsx").default)
            })
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

// const reducer = combineReducers({
//   re,
//   routing: routerReducer
// })
// const store = createStore(
//   reducer
// )
// const history = syncHistoryWithStore(hashHistory, store);
//
// (function(){
//   ReactDom.render((
//     <Provider store={store}>
//       <Router
//         history={history}
//         routes={rootRouter}
//       />
//     </Provider>
//   ), document.getElementById("root"))
// }())
