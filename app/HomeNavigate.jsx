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
    console.log(this.props);
    return (
      <div className="x-container x-font-xs">
        {
          (function(navTitle, _this){
            if(navTitle) {
              return (
                <div className="x-col-lg-12">
                  <a className="x-link" onClick={() => _this.props.createNavTitle("index")}>首页</a>
                  <a className="x-text-default x-split-left-tilt"></a>
                  <a className="x-text-default">{navTitle}</a>
                </div>
              )
            }
          })(this.props.navTitle, this)
        }
        出来吧子级
      </div>
    )
  }

}

XHomeNavigate.propTypes = {
  navTitle : React.PropTypes.string
}

XHomeNavigate.defaultProps = {
  navTitle : "index"
}
