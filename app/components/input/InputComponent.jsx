import React from 'react'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'

export default class InputComponent extends BaseComponent {

  refInput = null

  constructor(props) {
    super(props);
  }

  enable() {
    if(this.refInput) $(this.refInput).prop('disabled', false);
  }

  disable() {
    if(this.refInput) $(this.refInput).prop('disabled', true);
  }

  isDisable() {
    if(this.refInput) return $(this.refInput).is(':disabled');
  }

  setText(text) {
    if(this.refInput) $(this.refInput).text(text);
  }

  getText() {

  }

  setValue() {

  }

  getValue() {

  }

}

InputComponent.propTypes = {
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object
}

InputComponent.defaultProps = {
  disabled: false,
  className: ''
}
