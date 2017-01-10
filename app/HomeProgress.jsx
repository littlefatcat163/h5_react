import React from "react";
import ReactDOM from "react-dom"

class XNavProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rate: 0 };
  }

  render() {
    return (
      <div className="x-nav-progress">
        <div style={{ width: `${this.state.rate}%` }}></div>
      </div>
    )
  }

  updateRate(rate) {
    this.setState({ rate: rate });
    //console.log(rate);
  }

}

export default class HomeProgress {

  static __rate = 0;
  static __component = null;

  static load(rate) {
    this.__rate += rate;
    if(!this.__component) {
      let div = document.createElement('div');
      document.body.appendChild(div);
      this.__component = ReactDOM.render(<XNavProgress />, div);
    } else {
      this.__component.updateRate(this.__rate);
      if(this.__rate >= 100) {
        let parentNode = ReactDOM.findDOMNode(this.__component).parentNode;
        this.__component = null;
        this.__rate = 0;
        ReactDOM.unmountComponentAtNode(parentNode);
        document.body.removeChild(parentNode);
      }
    }
  }

}
