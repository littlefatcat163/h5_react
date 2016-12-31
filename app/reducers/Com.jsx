import React from 'react'

export default class Com extends React.Component {

  constructor(props) {
    super(props);
    this.props.process(1);
  }

  componentWillMount() {
    this.props.process(10)
  }

  render() {
    console.log("...");
    return (
      <div>
        I am Com
      </div>
    )
  }

  componentDidMount() {
    this.props.process(100)
  }

}
