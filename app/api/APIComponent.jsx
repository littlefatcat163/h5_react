import React from "react";

export default class APIComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  renderNavHead() {
    if(this.props.routeParams.id) {
      return (
        <div className="x-col-lg-12">
          <a className="x-link" href="#/home">首页</a>
          <a className="x-text-default x-split-left-tilt"></a>
          <a className="x-text-default">{this.props.routeParams.name}</a>
        </div>
      )
    }
  }

}
