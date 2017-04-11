import React from 'react'
import $ from 'jquery'
import InputComponent from './InputComponent'

import './_radio.scss'

/**
  @desc 单选框
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

export default class Radio extends InputComponent {

  [_config] = null;

  render() {
    return (
      <label className='xo-radio-container'>
        <span className={`xo-radio xo-radio-${this.props.size} xo-radio-${this.props.type} ${this.props.format}`}>
          <input
            ref={(_refInput) => this.refInput = _refInput}
            type='radio'
            name={this.props.name}
            disabled={this.props.disabled}
            defaultChecked={this.props.checked}
            onClick={(e) => this[_onClick](e)}
            />
          <span></span>
        </span>
        <span className='xo-radio-other'>{this.props.children}</span>
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

Radio.SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

Radio.TYPE = {
  PRIMARY: 'primary',
  INFO: 'info',
  WARN: 'warn',
  SUCCESS: 'success',
  DANGER: 'danger',
  DEFAULT: 'default'
}

Radio.FORMAT = {
  DEFAULT: '',
  ONE: 'xo-radio-format-1',
  TWO: 'xo-radio-format-2'
}

Radio.propTypes = Object.assign({}, InputComponent.propTypes);
Radio.propTypes.size = React.PropTypes.oneOf(Object.values(Radio.SIZE ));
Radio.propTypes.type = React.PropTypes.oneOf(Object.values(Radio.TYPE));
Radio.propTypes.checked = React.PropTypes.bool;
Radio.propTypes.name = React.PropTypes.string;
Radio.propTypes.format = React.PropTypes.oneOf(Object.values(Radio.FORMAT));

Radio.defaultProps = Object.assign({}, InputComponent.defaultProps);
Radio.defaultProps.size = Radio.SIZE.XS;
Radio.defaultProps.type = Radio.TYPE.DEFAULT;
Radio.defaultProps.checked = false;
Radio.defaultProps.name = '';
Radio.defaultProps.format = Radio.FORMAT.DEFAULT;
