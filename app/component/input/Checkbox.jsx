import React from 'react'
import $ from 'jquery'
import InputComponent from './InputComponent'

import './_checkbox.scss'

/**
  @desc 勾选框
  @prop
    size<enum>: 大小，对应Checkbox.SIZE，默认Checkbox.SIZE.XS
    type<enum>: 类型，对应Checkbox.TYPE, 默认Checkbox.TYPE.DEFAULT
    format<enum>: 模式，对应Checkbox.FORMAT，默认Checkbox.FORMAT.DEFAULT
    disabled<bool>: 禁用，默认false
    checked<bool>: 选中，默认false
    onClick<func>: 点击
    onCheckedChanged<func>: 选中值发生变化
*/

const _onClick = Symbol(`_onClick`)
const _config = Symbol('_config')

export default class Checkbox extends InputComponent {

  [_config] = null;

  render() {
    return (
      <label className='xo-checkbox-container'>
        <span className={`xo-checkbox xo-checkbox-${this.props.size} xo-checkbox-${this.props.type} ${this.props.format}`}>
          <input ref={(_refInput) => this.refInput = _refInput} type='checkbox' disabled={this.props.disabled} defaultChecked={this.props.checked} onClick={(e) => this[_onClick](e)} /><span></span>
        </span>
        <span className='xo-checkbox-other'>{this.props.children}</span>
      </label>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    this[_config] = Object.assign({}, this.props);
  }

  [_onClick](e) {
    if(this[_config].onClick && typeof this[_config].onClick == 'function') this[_config].onClick(this);
    if(this[_config].onCheckedChanged && typeof this[_config].onCheckedChanged == 'function') this[_config].onCheckedChanged(this);
  }

  getValue() {
    return $(this.refInput).is(':checked');
  }

  setValue(checked) {
    $(this.refInput).prop('checked', checked);
  }

}

Checkbox.SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

Checkbox.TYPE = {
  PRIMARY: 'primary',
  INFO: 'info',
  WARN: 'warn',
  SUCCESS: 'success',
  DANGER: 'danger',
  DEFAULT: 'default'
}

Checkbox.FORMAT = {
  DEFAULT: '',
  ONE: 'xo-checkbox-format-1',
  TWO: 'xo-checkbox-format-2'
}

Checkbox.propTypes = Object.assign({}, InputComponent.propTypes);
Checkbox.propTypes.size = React.PropTypes.oneOf(Object.values(Checkbox.SIZE ));
Checkbox.propTypes.type = React.PropTypes.oneOf(Object.values(Checkbox.TYPE));
Checkbox.propTypes.checked = React.PropTypes.bool;
Checkbox.propTypes.format = React.PropTypes.oneOf(Object.values(Checkbox.FORMAT));

Checkbox.defaultProps = Object.assign({}, InputComponent.defaultProps);
Checkbox.defaultProps.size = Checkbox.SIZE.XS;
Checkbox.defaultProps.type = Checkbox.TYPE.DEFAULT;
Checkbox.defaultProps.checked = false;
Checkbox.defaultProps.format = Checkbox.FORMAT.DEFAULT;
