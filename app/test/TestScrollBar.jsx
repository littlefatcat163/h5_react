import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ScrollBar from "../components/ScrollBar.jsx";

export default class TestScrollBar extends React.Component {

  xxx = <ScrollBar>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
          <div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</div>
        </ScrollBar>;

  constructor(props) {
    super(props);
    this.state = {
      scrollbar : <ScrollBar>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                  </ScrollBar> };
  }

  render() {
    return(
      <div>
        <div style={{height:200, width: 200}}>
          {/*this.state.scrollbar*/}
          {this.r()}
        </div>
        <button onClick={e => this.addOne()}> add one </button>
        <br/>
        <button onClick={e => this.del()}> del </button>
      </div>
    )
  }

  r() {
    let dom = null;
    if(this.state.scrollbar) dom = React.cloneElement(this.xxx, {ref : "asdasd"}, this.xxx.props.children);
              // (<ScrollBar ref="asdasd">
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //     <div>asdasd</div>
              //   </ScrollBar>);
    return dom;
  }

  addOne() {
    $(".scrollbar-children").append($("<div>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas</div>"));
  }

  del() {
    this.setState({ scrollbar : null });
  }
}
