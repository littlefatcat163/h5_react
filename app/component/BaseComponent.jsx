import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const _windowResize = Symbol('__windowResize')
const _resizeEvent = Symbol('_resizeEvent')
const _windowClick = Symbol('_windowClick')
const _windowClickEvent = Symbol('_domClickEvent')

export default class BaseComponent extends React.Component {

  $dom = null;
  [_resizeEvent] = false;
  [_windowClickEvent] = false;
  data = null;
  'data-key' = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.$dom = $(ReactDOM.findDOMNode(this));
    this['data-key'] = this.props['data-key'];
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  addResizeEventListener() {
    if(!this[_resizeEvent]) {
      $(window).bind("resize", this[_windowResize]);
      this[_resizeEvent] = true;
    }
  }

  addWindowClick() {
    if(!this[_windowClickEvent]) {
      $(window).bind("click", this[_windowClick]);
      this[_windowClickEvent] = true;
    }
  }

  removeEventListener() {
    if(this[_resizeEvent]) {
      $(window).unbind("resize", this[_windowResize]);
      this[_resizeEvent] = false;
    }
    if(this[_windowClickEvent]) {
      $(window).unbind("click", this[_windowClick]);
      this[_windowClickEvent] = false;
    }
  }

  [_windowResize] = () => this.windowResize();

  [_windowClick] = (e) => this.windowClick(e);

  windowResize() {
    console.info('请重写BaseComponent中的windowResize事件，检测浏览器窗口变化');
  }

  windowClick(e) {
    console.info('请重写BaseComponent中的documentClick事件，检测document点击事件');
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
