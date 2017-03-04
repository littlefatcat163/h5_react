import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './api.scss'
import { isEmpty } from '../tool/_XTool'

const __verifyDOM = Symbol(`__verifyDOM`)
const __renderLeftTargetDOM = Symbol(`__renderLeftTargetDOM`)
const __pLiClick = Symbol(`__pLiClick`)
const __liClick = Symbol(`__liClick`)
const __noticeRenderRate = Symbol(`__noticeRenderRate`)
const __rate = Symbol(`__rate`)

export default class BaseComponent extends React.Component {

  __leftTargetDOM = null;
  __rightToggleDOM = null;
  __thisDOM = null;
  __leftTargetList = null;
  __rightToggleList = null;
  [__rate] = 0;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="xo-container xo-font-xs" ref={(thisDOM) => this.__thisDOM = thisDOM}>
        <div className="xo-col-lg-12 xo-base-api">
          <div className="xo-row xo-base-api-row">
            <div className="xo-col-lg-2 xo-base-api-left">
              <div className='xo-row' ref={(leftTargetDOM) => this.__leftTargetDOM = leftTargetDOM}></div>
            </div>
            <div className="xo-col-lg-10 xo-base-api-right">
              <div className='xo-row' ref={(rightToggleDOM) => this.__rightToggleDOM = rightToggleDOM}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {

  }

  renderLeftDOM() {
    console.error(`Please rewrite the renderLeftDOM function -> \n` +
                  `   renderLeftDOM() { \n` +
                  `     return (\n`+
                  `       <div>\n` +
                  `         <ul className="xo-ul">\n` +
                  `           <h3>test</h3>\n` +
                  `           <li data-target="_target">toTargetToggle</li>\n` +
                  `         </u>\n` +
                  `       </div>\n` +
                  `     )\n` +
                  `   }`
                );
  }

  getRightDOMList() {

  }

  init() {
    this[__noticeRenderRate](1);
    setTimeout(() => {
      ReactDOM.render(this.renderLeftDOM(), this.__leftTargetDOM);
      this[__noticeRenderRate](29);

      setTimeout(() => {
        $(this.__leftTargetDOM).children().children().children('li').children('div:first-child').bind('click', this[__pLiClick]);
        $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').bind('click', this[__liClick]);
        this[__noticeRenderRate](10);

        setTimeout(() => {
          $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').first().click();
        }, 100);

      }, 100);

    }, 100);
  }

  //父级li点击事件
  [__pLiClick] = (e) => {
    let $pli = $(e.target).parent();
    if($pli.hasClass(`xo-active`)){
      $pli.find('ul').slideDown(300);
      $pli.removeClass(`xo-active`);
    } else {
      $pli.find('ul').slideUp(300);
      $pli.addClass(`xo-active`);
    }
  }

  //li点击事件
  [__liClick] = (e) => {
    let $li = $(e.target);
    if($li.hasClass(`xo-active`)) {
      return;
    } else {
      this[__rate] = 40;

      $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').removeClass(`xo-active`);
      ReactDOM.render(<div></div>, this.__rightToggleDOM);
      this[__noticeRenderRate](10);

      setTimeout(() => {
        let rightDOMList = this.getRightDOMList();
        for(let rightDOM of rightDOMList) {
          if(rightDOM['data-toggle'] == $li.attr('data-target')) {
            ReactDOM.render(rightDOM.render(), this.__rightToggleDOM);
            break;
          }
        }
        $li.addClass(`xo-active`);
        this[__noticeRenderRate](50);
      }, 100);

    }
  }

  //验证DOM
  [__verifyDOM]() {

    // let errorMsg = null;
    //
    // if(!this.__leftTargetList || this.__leftTargetList.length == 0) {
    //   errorMsg = `Please assignment the variable ~ __leftTargetList -> \n` +
    //              `this.__leftTargetList = [ \n` +
    //              `  { id: '自身id，必须提供', name: '名称，必须提供', target: '呼应__rightToggleList中的toogle', pid: ‘对应父级菜单id’, render: '渲染方式，__leftTargetList暂不提供'}\n` +
    //              `]`;
    // } else if(!this.__rightToggleList || this.__rightToggleList.length == 0) {
    //   errorMsg = `Please assignment the variable ~ __rightToggleList -> \n` +
    //            = `this.__rightToggleList = [ \n` +
    //            = `  { toggle: '响应__leftTargetList中的target, 必须提供', render: function() { return ( /* 提供DOM的渲染方式, 必须提供 */ ) } } \n` +
    //            = `]`;
    // }
    //
    // if(errorMsg) {
    //   console.error(errorMsg);
    //   return false;
    // }
    //
    // return true;

  }

  //渲染左边菜单栏
  [__renderLeftTargetDOM]() {
    let leftTargetDOMList = [];
    let idMap = {};
    let slipList = [];
    this.__leftTargetList.forEach(function(__leftTarget, index) {
      if(isEmpty(__leftTarget.pid)) {
        leftTargetDOMList.push(<li>{__leftTarget.name}</li>);
      } else {
        slipList.push(__leftTarget);
      }
    });
  }

  [__noticeRenderRate](rate = 0) {
    if(this[__rate] > 100) return;
    this[__rate] += rate;
    if(this.props.renderRate && this.props.renderRate instanceof Function) this.props.renderRate(this[__rate]);
  }

}


BaseComponent.propTypes = {

  renderRate: React.PropTypes.func

}

BaseComponent.defaultProps = {

  renderRate: null

}
