import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const _windowResize = Symbol('__windowResize')
const _enableEvent = Symbol('_enableEvent')

export default class BaseComponent extends React.Component {

  $dom = null;
  [_enableEvent] = false;

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

  hide() {
    if(this.$dom) this.$dom.hide();
  }

  show() {
    if(this.$dom) this.$dom.show();
  }

}
