import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import $ from "jquery";
import Test2 from "./Test2.jsx";
import "./test1.scss";

export default class Test1 extends React.Component {

  test2 = <Test2 ref={(test2) => this.test2 = test2} />

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2 className="test1-h2">Hello , I'm Test1...</h2>
        {this.test2}
        <Link to="/tc" activeStyle={{color : "red"}}> to child route ~ tc </Link>
        <div>
          {this.props.children}
        </div>
        <div className="xxx"></div>
        <button onClick={() => this.test2Fun()}>test2</button>
      </div>
    )
  }

  test2Fun() {
    this.test2.test();
  }

}
