import React from "react";
import HomeProgress from './HomeProgress';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //console.log("I am test render...");
    return (
      <div>
        xx-xx
        {
          (() => {
            //console.log(this);
            let component = React.cloneElement(this.props.children, {test: (rate) => this.updateRate(rate), ref: (ad) => this.asd = ad});
            //console.log(component);
            //component.props.history.push({state: {asdasd:()=>console.log('...')}})
            return component;
          })()
        }
      </div>
    )
  }

  componentDidMount() {
    console.log(this.asd);
    //this.asd.props.history.push({state: {asdasd:()=>console.log('...')}})
  }

  updateRate(rate) {
    console.log(rate);
    HomeProgress.load(rate);
  }


}
