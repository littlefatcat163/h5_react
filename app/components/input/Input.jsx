import React from 'react'

import InputComponent from './InputComponent'
import xoSystem from '../../tool/_xoSystem'

import './_input.scss'

export default class Input extends InputComponent {

  render() {
    let addonBefore = null;
    let addonAfter = null;
    if(!xoSystem.isEmpty(this.props.addonBefore)) addonBefore = <span className='xo-input-addon'>{this.props.addonBefore}</span>;
    if(!xoSystem.isEmpty(this.props.addonAfter)) addonAfter = <span className='xo-input-addon'>{this.props.addonAfter}</span>;
    return (
      <div className='xo-input-container'>
        {addonBefore}
        <input ref={(refInput) => this.refInput = refInput} type='text' />
        {addonAfter}
      </div>
    )
  }

}

Input.propTypes = Object.assign({}, InputComponent.propTypes);

Input.defaultProps = Object.assign({}, InputComponent.defaultProps);

class InputGroup extends InputComponent {

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

Input.InputGroup = InputGroup;
