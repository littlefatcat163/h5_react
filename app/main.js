import React from "react";
import ReactDOM from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
import "./style/style.scss";
import "./aid/font-awesome-4.7.0/scss/font-awesome.scss";
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import { routes as apiRoutes } from "./api/apiRoutes";
// import { createStore, combineReducers } from 'redux';
// import { Provider, connect } from 'react-redux';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import re from "./reducers/re";
// import App from './reducers/App';
// import Bar from './reducers/Bar';
// import Foo from './reducers/Foo';
// import Home from './reducers/Home';
//import "./test";


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
      // childRoutes : [
      //   {
      //     path : "/home/:id/:name",
      //     getComponent(nextState, callback) {
      //       require.ensure([], (require) => {
      //         callback(null, require("./api/" + nextState.params.id + ".jsx").default)
      //       })
      //     }
      //   }
      // ]
      childRoutes : [
        ...apiRoutes,
        // {
        //   path : "/home/ss",
        //   getComponent(nextState, callback) {
        //     require.ensure([], (require) => {
        //       callback(null, require("./api/Ss.jsx").default)
        //     })
        //   }
        // }
      ]
    }
  ]
};

ReactDOM.render((
  <Router
    history={hashHistory}
    routes={rootRouter}
  />
), document.getElementById("root"))

// const reducer = combineReducers({
//   re,
//   routing: routerReducer
// })
// const store = createStore(
//   reducer
// )
// const history = syncHistoryWithStore(browserHistory, store);
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Home}/>
//         <Route path="foo" component={Foo}/>
//         <Route path="bar" component={Bar}/>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )
