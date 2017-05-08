/**
  @desc 输入框
  @prop
    disabled<bool>: 禁用，默认false
    value<string/number>: 值
    maxLength<number>: 输入内容的最大长度，默认9999
    allowInputType<enum>: 允许输入的类型
    placeholder<string>: 输入框空的时候显示的内容
    onFocus<func>,
    onBlur<func>,
    onKeyDown<func>,
    onKeyPress<func>,
    onKeyUp<func>,
    onChange<func>,
    onCopy<func>,
    onCut<func>,
    onPaste<func>
*/
import React from 'react'
import $ from 'jquery'
import InputComponent from './InputComponent'
import xoSystem from '../../tool/_xoSystem'

import './_input.scss'

const _config = Symbol(`_config`)
const _value = Symbol(`_value`)
const _onFocus = Symbol(`_onFocus`)
const _onBlur = Symbol(`_onBlur`)
const _onKeyDown = Symbol(`_onKeyDown`)
const _onKeyPress = Symbol(`_onKeyPress`)
const _onKeyUp = Symbol(`_onKeyUp`)
const _onChange = Symbol(`_onChange`)
const _onCopy = Symbol(`_onCopy`)
const _onCut = Symbol(`_onCut`)
const _onPaste = Symbol(`_onPaste`)
const _inputComposition = Symbol(`_inputComposition`)//是否非直接输入,如中文输入法

export default class Input extends InputComponent {

  [_config] = {};

  [_value] = null;

  [_inputComposition] = false;

  render() {
    let addonBefore = null;
    let addonAfter = null;
    if(!xoSystem.isEmpty(this.props.addonBefore)) {
      let addonClassName = '';
      if(typeof this.props.addonBefore == 'object') addonClassName = this.props.addonBefore.type.displayName;
      addonBefore = <span className={`xo-input-addon ${addonClassName}`}>{this.props.addonBefore}</span>;
    }
    if(!xoSystem.isEmpty(this.props.addonAfter)) {
      let addonClassName = '';
      if(typeof this.props.addonAfter == 'object') addonClassName = this.props.addonAfter.type.displayName;
      addonAfter = <span className={`xo-input-addon ${addonClassName}`}>{this.props.addonAfter}</span>;
    }
    return (
      <div className={`xo-input-container ${this.props.className}`}>
        {addonBefore}
        <input
          ref={(refInput) => this.refInput = refInput}
          style={this.props.style}
          type='text'
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          onFocus={(e) => this[_onFocus](e)}
          onBlur={(e) => this[_onBlur](e)}
          onKeyDown={(e) => this[_onKeyDown](e)}
          onKeyPress={(e) => this[_onKeyPress](e)}
          onKeyUp={(e) => this[_onKeyUp](e)}
          onChange={(e) => this[_onChange](e)}
          onCopy={(e) => this[_onCopy](e)}
          onCut={(e) => this[_onCut](e)}
          onPaste={(e) => this[_onPaste](e)}
          onCompositionEnd={(e) => {this[_inputComposition] = false; this[_onChange](e);}}
          onCompositionStart={(e) => this[_inputComposition] = true}
        />
        {addonAfter}
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    const {
      allowInput,
      maxLength,
      allowInputType,
      errorMsg,
      vtypeVal,
      onlyInputVType,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      onChange,
      onCopy,
      onCut,
      onPaste
    } = this.props;
    let config = {
      allowInput: allowInput,
      maxLength: maxLength,
      vtypeVal: vtypeVal,
      errorMsg: errorMsg,
      allowInputType: allowInputType,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      onKeyPress: onKeyPress,
      onKeyUp: onKeyUp,
      onChange: onChange,
      onCopy: onCopy,
      onCut: onCut,
      onPaste: onPaste
    }
    this.setConfig(config);
  }

  //获取焦点
  [_onFocus](e) {
    if(this[_config].onFocus && typeof this[_config].onFocus == 'function') this[_config].onFocus(this, e);
  }

  //失去焦点
  [_onBlur](e) {
    if(this[_config].onBlur && typeof this[_config].onBlur == 'function') this[_config].onBlur(this, e);
  }

  //键盘按下
  [_onKeyDown](e) {
    if(this[_config].onKeyDown && typeof this[_config].onKeyDown == 'function') this[_config].onKeyDown(this, e);
  }

  [_onKeyPress](e) {
    if(this[_config].onKeyPress && typeof this[_config].onKeyPress == 'function') this[_config].onKeyPress(this, e);
  }

  //键盘弹起
  [_onKeyUp](e) {
    if(this[_config].onKeyUp && typeof this[_config].onKeyUp == 'function') this[_config].onKeyUp(this, e);
  }

  [_onChange](e) {
    if(!this[_inputComposition]) {
      if(this[_config]._regex) $(this.refInput).val($(this.refInput).val().replace(this[_config]._regex, ''));
      if(this[_config].onChange && typeof this[_config].onChange == 'function') this[_config].onChange(this, e);
    }
  }

  [_onCopy](e) {
    if(this[_config].onFocus && typeof this[_config].onFocus == 'function') this[_config].onFocus(this, e);
  }

  [_onCut](e) {
    if(this[_config].onCut && typeof this[_config].onCut == 'function') this[_config].onCut(this, e);
  }

  [_onPaste](e) {
    if(this[_config].onPaste && typeof this[_config].onPaste == 'function') this[_config].onPaste(this, e);
  }

  //设置配置
  setConfig(config) {
    this[_config] = Object.assign(this[_config], config);
    $(this.refInput).prop('maxLength', this[_config].maxLength).prop('placeholder', this[_config].placeholder);
    if(this[_config].allowInputType && this[_config].allowInputType.length > 0) {
      let _vtAll, _vtNum, _vtRegex, _vtEnglish, _vtChinese; //_vtDate, _vtEmail, _vtIdCard, _vtPhoneNum ;
      this[_config].allowInputType.forEach((allowInputType, index) => {
        if(allowInputType == Input.ALLOW_INPUT_TYPE.ALL) _vtAll = true;
        else if(allowInputType == Input.ALLOW_INPUT_TYPE.NUMBER) _vtNum = true;
        else if(allowInputType == Input.ALLOW_INPUT_TYPE.ENGLISH) _vtEnglish = true;
        else if(allowInputType == Input.ALLOW_INPUT_TYPE.CHINESE) _vtChinese = true;
        else _vtRegex = true;
        //else if(vtype == Input.ALLOW_INPUT_TYPE.DATE) _vtDate = true;
        //else if(vtype == Input.ALLOW_INPUT_TYPE.REGEX) _vtRegex = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.RANGE) this[_config]._vtRange = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.EMAIL) _vtEmail = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.MAXLENGTH) this[_config]._vtMaxLength = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.MINLENGTH) this[_config]._vtMinLength = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.RANGELENGTH) this[_config]._vtRangeLength = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.IDCARD) _vtIdCard = true;
        // else if(vtype == Input.ALLOW_INPUT_TYPE.PHONENUM) _vtPhoneNum = true;
      });

      let _regex = null;
      if(_vtRegex) {
        _regex = this[_config].allowInputType;
      } else if(_vtEnglish || _vtChinese) {
        if(_vtChinese && _vtEnglish) {
          _regex = /[^A-Za-z\u4e00-\u9fa5]/g;
          if(_vtNum) _regex = /[^A-Za-z0-9\u4e00-\u9fa5]/g;
        } else if(_vtEnglish) {
          _regex = /[^A-Za-z]/g;
          if(_vtNum) _regex = /[^A-Za-z0-9]/g;
        } else {
          _regex = /[^\u4e00-\u9fa5]/g;
         if(_vtNum) _regex = /[^0-9\u4e00-\u9fa5]/g;
        }
      } else if(_vtNum) {
        _regex = /[^\d]/g;
      }
      // if(_vtRegex) {
      //   if(this[_config].vtypeVal && this[_config].vtypeVal.length > 0) _regex = this[_config].vtypeVal[0];
      //   else _regex = null;
      // } else if(_vtIdCard) {
      //   _regex = /^\d{15}|\d{18}$/;
      // } else if(_vtPhoneNum) {
      //   _regex = /^1[3|5][0-9]\d{4,8}$/;
      // } else if(_vtEmail) {
      //   _regex = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
      // } else if(_vtDate) {
      //   _regex = /^\d+-+(0+[1-9]|1[0-2])+-+(0+[1-9]|(1|2)[0-9]|30|31)$/;
      // } else if(_vtEnglish) {
      //   _regex = /^[A-Za-z]+$/;
      //   if(_vtInt) _regex = /^[A-Za-z0-9]+$/;
      //   if(_vtFloat) _regex = /^[A-Za-z(-?\d+)(\.\d+)]+$/;
      //   if(_vtChinese) {
      //     _regex = /^[A-Za-z\u4e00-\u9fa5]+$/;
      //     if(_vtInt) _regex = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
      //     if(_vtFloat) _regex = /^[A-Za-z(-?\d+)(\.\d+)\u4e00-\u9fa5]+$/;
      //   }
      // } else if(_vtChinese) {
      //   _regex = /^[\u4e00-\u9fa5]+$/;
      //   if(_vtInt) _regex = /^[0-9\u4e00-\u9fa5]+$/;
      //   if(_vtFloat) _regex = /^[(-?\d+)(\.\d+)\u4e00-\u9fa5]+$/;
      //   if(_vtEnglish) {
      //     _regex = /^[A-Za-z\u4e00-\u9fa5]+$/;
      //     if(_vtInt) _regex = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
      //     if(_vtFloat) _regex = /^[A-Za-z(-?\d+)(\.\d+)\u4e00-\u9fa5]+$/;
      //   }
      // } else if(_vtInt) _regex = /^-?\d+$/;
      // else if(_vtFloat) _regex = /^(-?\d+)(\.\d+)?/;
      this[_config]._regex = _regex;
    }
  }

  //验证输入框内容是否符合规范
  checkInputVal() {
    let result = false;
    let msg = null;
    let val = $(this.refInput).val();
    if(!this[_config]._regex) result = true;
    else result = this[_config]._regex.test(val);
    return result;
  }

  focus() {
    $(this.refInput).focus();
  }

  blur() {
    $(this.refInput).blur();
  }

  setValue(value) {
    super.setValue(value);
    this[_onChange]();
  }

}

Input.ALLOW_INPUT_TYPE = {
  ALL: null,
  NUMBER: 'number',
  //DATE: 'date',
  REGEX: 'regex',
  ENGLISH: 'english',
  CHINESE: 'chinese'
  //RANGE: 'range',
  //EMAIL: 'email',
  //MAXLENGTH: 'maxLength',
  //MINLENGTH: 'minLength',
  //RANGELENGTH: 'rangeLength',
  //IDCARD: 'idCard',
  //PHONENUM: 'phoneNumber'
}

Input.propTypes = Object.assign({}, InputComponent.propTypes);
Input.propTypes.maxLength = React.PropTypes.number;
Input.allowInputType = React.PropTypes.arrayOf(React.PropTypes.oneOf(Object.values(Input.ALLOW_INPUT_TYPE)));
Input.vtypeVal = React.PropTypes.array;
Input.placeholder = React.PropTypes.string;

Input.defaultProps = Object.assign({}, InputComponent.defaultProps);
Input.defaultProps.value = '';
Input.defaultProps.maxLength = 9999;
Input.defaultProps.allowInputType = [Input.ALLOW_INPUT_TYPE.ALL];
Input.defaultProps.vtypeVal = null;
Input.defaultProps.placeholder = '';

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
