import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { createStore } from 'redux'
import { Provider, connect } from "react-redux";

export default class XHomeNavigate extends React.Component {

  __DATA__ = null;

  constructor(props) {
    super(props);
    this.__initData();
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
        <div className="x-col-lg-12 x-margin-top-xs">
          <div className="x-row">
            <div className="x-col-lg-3">
              <div className="x-layout x-bg-white">
                <ul className="x-ul">
                  <h3>文档说明</h3>
                  <li>asd</li>
                  <li>asd</li>
                  <li>asd</li>
                  <li>asd</li>
                </ul>
              </div>
            </div>
            <div className="x-col-lg-9">
              <div className="x-row x-layout x-bg-white">
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
                <h1>asdasdasdasd</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  __initData() {
    this.__DATA = {
      //环境搭建
      environment : {
        navList : [

        ],
        
      }

    }
  }

}
