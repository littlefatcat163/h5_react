import React from 'react'
import ReactDOM from 'react-dom'

import InputComponent from './InputComponent'
import Icon from '../ui/Icon'

import './_button.scss'

const __onClick = Symbol(`__onClick`)

/**
  @desc 按钮
  @prop
    type<enum>: 类型，对应Button.TYPE，默认Button.TYPE.DEFAULT
    size<enum>: 大小，对应Button.SIZE，默认Button.SIZE.XS
    onClick<func>: 点击事件，(btn, e) => { ... }
    disabled<bool>: 禁用，默认false
    className<string>
    style<object>
*/
export default class Button extends InputComponent {

  render() {
    return (
      <button className={`xo-btn xo-btn-${this.props.type} xo-btn-${this.props.size} ${this.props.className}`}
              style={this.props.style}
              disabled={this.props.disabled}
              ref={(_refInput) => this.refInput = _refInput}
              onClick={(e) => this[__onClick](e)}>
              {
                React.Children.map(this.props.children, (child, index) => {
                  if(child && typeof child == 'object') {
                    if(child.type.name == 'Icon') {
                      let style = null;
                      if(index != 0) style = { marginLeft: 5 };
                      else style = { marginRight: 5 };
                      return React.cloneElement(child, {...child.props, style: style});
                    }
                  }
                  return child;
                })
              }
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

Button.propTypes = Object.assign({}, InputComponent.propTypes);
Button.propTypes.size = React.PropTypes.oneOf(Object.values(Button.SIZE));
Button.propTypes.type = React.PropTypes.oneOf(Object.values(Button.TYPE));
Button.propTypes.onClick = React.PropTypes.func;

Button.defaultProps = Object.assign({}, InputComponent.defaultProps);
Button.defaultProps.size = Button.SIZE.XS;
Button.defaultProps.type = Button.TYPE.DEFAULT;

/**
  @desc 按钮组
  @prop
    className<string>
    style<object>
    type<enum>: 类型, 对应BtnGroup.TYPE，默认BtnGroup.TYPE.HOR;
*/
class BtnGroup extends InputComponent {

  render() {
    let _className = null;
    if(this.props.type == BtnGroup.TYPE.VER) _className = 'xo-btn-ver';
    return (
      <div className={`xo-btn-group ${_className} ${this.props.className}`} style={this.props.style}>
        {
          React.Children.map(this.props.children, (child, index) => {
            let {onClick} = child.props;
            let __onClick = (_btn, _btnComponent) => {
              _btn.$dom.addClass(`active`);
              _btn.$dom.siblings().removeClass(`active`);
              if(onClick && typeof onClick == 'function') onClick(_btn, _btnComponent);
            };
            return React.cloneElement(child, {...child.props, onClick: __onClick});
          })
        }
      </div>
    )
  }

}

BtnGroup.TYPE = {
  VER: 'ver',//垂直
  HOR: 'hor'//水平
}
BtnGroup.propTypes = Object.assign({}, InputComponent.propTypes);
BtnGroup.propTypes.type = React.PropTypes.oneOf(Object.values(BtnGroup.TYPE));

BtnGroup.defaultProps = Object.assign({}, InputComponent.defaultProps);
BtnGroup.defaultProps.type = BtnGroup.TYPE.HOR;
Button.BtnGroup = BtnGroup;

/**
  @desc 多级按钮
  @prop
    type<enum>: 类型，对应BtnDrop.TYPE，默认BtnDrop.TYPE.HOR
    data<array>: 数据，格式 [ {name<string>: 名称, size<enum>: 对应Button.SIZE, type<enum>: 对应Button.TYPE, render<func>: (sender) => { return ... }, children:<array>: 子集 } ]
    其他配置项
    config: {
      onClick<func>: (e, sender) => {  }
    }
*/
const _btnDropMap = Symbol(`_btnDropMap`)
const _getDropChildRender = Symbol(`_getDropChildRender`)
const _btnDropConfig = Symbol(`_btnDropConfig`)
const _btnDropOnClick = Symbol(`_btnDropOnClick`)

class BtnDrop extends InputComponent {

  [_btnDropMap] = null;
  [_btnDropConfig] = {
    onClick: null
  };

  render() {
    return (
      <div className='xo-btn-drop-group'></div>
    )
  }

  componentDidMount() {
    this.setData(this.props.data);
    this.setConfig(this.props.config);
  }

  //设置数据
  setData(data) {
    super.setData(data);
    this[_btnDropMap] = new Map();
    if(!data && data.length == null) { ReactDOM.render(<div></div>, ReactDOM.findDOMNode(this)); return; }
    let typeClassName = '';
    if(this.props.type == BtnDrop.TYPE.VER) typeClassName = 'xo-btn-drop-ver';
    let dom = [];
    this.getData().forEach((data, index) => {
      let icon = null;
      if(data.children && data.children.length > 0) icon = <Icon className='angle-down'/>;
      let firstBtn = <Button size={data.size} type={data.type}>{data.name}{icon}</Button>;
      if(data.render && typeof data.render == 'function') firstBtn = data.render({name: data.name});
      firstBtn = <div onClick={(e) => this[_btnDropOnClick](e)}>{firstBtn}</div>;
      dom.push(<div key={`xo-btn-drop-${index}`} className={`xo-btn-drop ${typeClassName}`}>{firstBtn}{this[_getDropChildRender](data.children, 'xo-btn-drop-child', data.size, data.type)}</div>);
      this[_btnDropMap].set(firstBtn, data);
    });
    ReactDOM.render(<div>{dom}</div>, ReactDOM.findDOMNode(this));
  }

  [_getDropChildRender](children, dropChildClass, size, type) {
    if(children && children.length > 0) {
      let childDOM = [];
      children.forEach((child, index) => {
        let icon = null;
        if(child.children && child.children.length > 0) icon = <Icon className='angle-right'/>
        if(!child.size) child.size = size;
        if(!child.type) child.type = type;
        let btn = <Button size={child.size} type={child.type}>{child.name}{icon}</Button>;
        if(child.render && typeof child.render == 'function') btn = child.render({name: child.name});
        btn = <div onClick={(e) => this[_btnDropOnClick](e)}>{btn}</div>;
        childDOM.push(<div key={`xo-btn-drop-more-${index}`} className='xo-btn-drop-more'>{btn}{this[_getDropChildRender](child.children, 'xo-btn-drop-more-child', child.size, child.type)}</div>);
        this[_btnDropMap].set(btn, child);
      });
      return <div className={dropChildClass}>{childDOM}</div>;
    }
    return null;
  }

  //设置配置数据
  setConfig(config) {
    this[_btnDropConfig] = Object.assign({}, this[_btnDropConfig], this.props.config);
  }

  [_btnDropOnClick](e) {
    if(this[_btnDropConfig].onClick && typeof this[_btnDropConfig].onClick == 'function') this[_btnDropConfig].onClick(e, {data: this[_btnDropMap].get(this.findReactDOMNode(e))});
  }

}

BtnDrop.TYPE = {
  VER: 'ver',//垂直
  HOR: 'hor'//水平
}
BtnDrop.propTypes = Object.assign({}, InputComponent.propTypes);
BtnDrop.propTypes.type = React.PropTypes.oneOf(Object.values(BtnDrop.TYPE));
BtnDrop.propTypes.config = React.PropTypes.object;

BtnDrop.defaultProps = Object.assign({}, InputComponent.defaultProps);
BtnDrop.defaultProps.type = BtnDrop.TYPE.HOR;

Button.BtnDrop = BtnDrop;
