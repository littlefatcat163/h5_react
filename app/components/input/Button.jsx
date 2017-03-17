import React from 'react'

import InputComponent from './InputComponent'

import './_button.scss'

const __onClick = Symbol(`__onClick`)

export default class Button extends InputComponent {

  render() {
    return (
      <button className={`xo-btn xo-btn-${this.props.type} xo-btn-${this.props.size} ${this.props.className}`}
              style={this.props.style}
              disabled={this.props.disabled}
              ref={(_refInput) => this.refInput = _refInput}
              onClick={(e) => this[__onClick](e)}>
              { this.props.children }
      </button>
    )
  }

  [__onClick](e) {
    if(this.props.onClick && typeof this.props.onClick == 'function') this.props.onClick(this, e);
  }

}

Button.SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  BLOCK: 'block'
}

Button.TYPE = {
  PRIMARY: 'primary',
  INFO: 'info',
  WARN: 'warn',
  SUCCESS: 'success',
  DANGER: 'danger',
  DEFAULT: 'default'
}

Button.propTypes = InputComponent.propTypes;
Button.propTypes.size = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'block']);
Button.propTypes.type = React.PropTypes.oneOf(['primary', 'info', 'warn', 'success', 'danger', 'default']);
Button.propTypes.onClick = React.PropTypes.func;

Button.defaultProps = InputComponent.defaultProps;
Button.defaultProps.size = Button.SIZE.XS;
Button.defaultProps.type = Button.TYPE.DEFAULT;
