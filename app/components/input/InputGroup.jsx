import React from 'react'

import InputComponent from './InputComponent'

export default class InputGroup extends InputComponent {

  render() {
    return <div className={`xo-input-group ${this.props.type} ${this.props.className}`} style={this.props.style}>{this.props.children}</div>
  }

}

InputGroup.TYPE = {
  VER: 'xo-input-ver',
  HOR: ''
}

InputGroup.propTypes = Object.assign({}, InputComponent.propTypes);
InputGroup.propTypes.type = React.PropTypes.oneOf(Object.values(InputGroup.TYPE));

InputGroup.defaultProps = Object.assign({}, InputComponent.defaultProps);
InputGroup.defaultProps.type = InputGroup.TYPE.HOR;
