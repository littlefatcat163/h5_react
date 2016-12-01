import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { createStore } from 'redux'
import { Provider, connect } from "react-redux";

export default class XHomeNavigate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //let { id, name } = this.props.routeParams;
    //console.log(id);
    //console.log(name);
    return (
      <div className="x-container x-font-xs">
        {
          (function(routeParams, _this){
            if(routeParams.id) {
              return (
                <div className="x-col-lg-12">
                  <a className="x-link" href="#/home">首页</a>
                  <a className="x-text-default x-split-left-tilt"></a>
                  <a className="x-text-default">{routeParams.name}</a>
                </div>
              )
            }
          })(this.props.routeParams, this)
        }
      </div>
    )
  }

}
