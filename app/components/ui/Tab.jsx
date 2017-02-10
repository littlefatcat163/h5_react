import React from 'react'
import ReactDOM from 'react-dom'

export default class Tab extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    React.Children.forEach(this.props.children, function(children, index) {
      console.log(children);
    });
    return (
      <div className='x-layout'>
        <div>

        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

}

Tab.TabPane = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}
