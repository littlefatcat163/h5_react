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

  //displayName='xo-icon'

  render() {
    return (
      <i className={`fa fa-${this.props.className}`} style={this.props.style}></i>
    )
  }

}
