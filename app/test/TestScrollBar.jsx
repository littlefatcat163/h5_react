import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ScrollBar from "../components/ScrollBar.jsx";

export default class TestScrollBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollbar : <ScrollBar ref="scrollbar">
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                  </ScrollBar>  };
  }

  render() {
    return(
      <div>
        <div style={{height:200, width: 200}}>
          {this.state.scrollbar}
        </div>
        <button onClick={e => this.addOne()}> add one </button>
        <br/>
        <button onClick={e => this.del()}> del </button>
      </div>
    )
  }

  addOne() {
    $(".scrollbar-content").append("<div>asdasd</div>");
  }

  del() {
    this.setState({ scrollbar : null });
  }
}
