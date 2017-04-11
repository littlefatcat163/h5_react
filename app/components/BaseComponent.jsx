import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const _windowResize = Symbol('__windowResize')
const _enableEvent = Symbol('_enableEvent')

export default class BaseComponent extends React.Component {

  $dom = null;
  [_enableEvent] = false;
  data = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.$dom = $(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  addEventListener() {
    if(!this[_enableEvent]) {
      $(window).bind("resize", this[_windowResize]);
      this[_enableEvent] = true;
    }
  }

  removeEventListener() {
    if(this[_enableEvent]) {
      $(window).unbind("resize", this[_windowResize]);
      this[_enableEvent] = false;
    }
  }

  [_windowResize] = () => this.windowResize()

  windowResize() {
    console.info('请重写BaseComponent中的windowResize事件，检测浏览器窗口变化');
  }

  /**
    根据操作的react节点获取相应的跟节点
    @param e<操作的reactComponent>, domName<string>
    @return ReactDOMComponent
  */
  findReactDOMNode(e, domName, _component) {
    if(!domName) domName = e.currentTarget.nodeName;
    if(e && domName) {
      if(!_component) _component = e._targetInst;
      else _component = _component._hostParent;
      if(_component._tag != domName.toLowerCase()) _component = this.findReactDOMNode(e, domName, _component);
      else _component = _component._currentElement;
    }
    return _component;
  }

  hide() {
    if(this.$dom) this.$dom.hide();
  }

  show() {
    if(this.$dom) this.$dom.show();
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

}
