/**
  @author mxb
  @desc 轻量级图标
  @prop
    className: <string> 对应图标的class
    type: <enum> 枚举，表示图标的类型位置
    style: <object> 类型
*/
import React from 'react'
import ReactDOM from 'react-dom'

import BaseComponent from '../BaseComponent'

export default class Icon extends BaseComponent {

  render() {
    return (
      <i className={`fa fa-${this.props.className} ${this.props.type}`} style={this.props.style}></i>
    )
  }

}

Icon.displayName = 'Icon';
Icon.TYPE = {
  DEFAULT: '',
  PRIMARY: 'xo-icon-primary',
  SUCCESS: 'xo-icon-success',
  WARN: 'xo-icon-warn',
  DANGER: 'xo-icon-danger',
  INFO: 'xo-icon-info',
}

Icon.propTypes = {
  type: React.PropTypes.oneOf(Object.values(Icon.TYPE))
}

Icon.defaultProps = {
  type: Icon.TYPE.DEFAULT
}
