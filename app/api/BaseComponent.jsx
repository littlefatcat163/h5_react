import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './api.scss'
import { isEmpty } from '../tool/_XTool'

const __verifyDOM = Symbol(`__verifyDOM`)
const __renderLeftTargetDOM = Symbol(`__renderLeftTargetDOM`)
const __pLiClick = Symbol(`__pLiClick`)
const __liClick = Symbol(`__liClick`)

export default class BaseComponent extends React.Component {

  __leftTargetDOM = null;
  __rightToggleDOM = null;
  __thisDOM = null;
  __leftTargetList = null;
  __rightToggleList = null;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="x-container x-font-xs" ref={(thisDOM) => this.__thisDOM = thisDOM}>
        <div className="x-col-lg-12 x-base-api">
          <div className="x-row x-base-api-row">
            <div className="x-col-lg-2 x-base-api-left">
              <div className='x-row' ref={(leftTargetDOM) => this.__leftTargetDOM = leftTargetDOM}></div>
            </div>
            <div className="x-col-lg-10 x-base-api-right">
              <div className='x-row' ref={(rightToggleDOM) => this.__rightToggleDOM = rightToggleDOM}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    ReactDOM.render(this.renderLeftDOM(), this.__leftTargetDOM);
    $(this.__leftTargetDOM).children().children().children('li').children('div:first-child').bind('click', this[__pLiClick]);
    $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').bind('click', this[__liClick]);
    $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').first().click();
  }

  componentWillUnmount() {

  }

  renderLeftDOM() {
    console.error(`Please rewrite the renderLeftDOM function -> \n` +
                  `   renderLeftDOM() { \n` +
                  `     return (\n`+
                  `       <div>\n` +
                  `         <ul className="x-ul">\n` +
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

  //父级li点击事件
  [__pLiClick] = (e) => {
    let $pli = $(e.target).parent();
    if($pli.hasClass(`x-active`)){
      $pli.find('ul').slideDown(300);
      $pli.removeClass(`x-active`);
    } else {
      $pli.find('ul').slideUp(300);
      $pli.addClass(`x-active`);
    }
  }

  //li点击事件
  [__liClick] = (e) => {
    let $li = $(e.target);
    if($li.hasClass(`x-active`)) {
      return;
    } else {
      $(this.__leftTargetDOM).children().children().children('li').children('ul').children('li').removeClass(`x-active`);
      ReactDOM.render(<div></div>, this.__rightToggleDOM);
      let rightDOMList = this.getRightDOMList();
      for(let rightDOM of rightDOMList) {
        if(rightDOM['data-toggle'] == $li.attr('data-target')) {
          ReactDOM.render(rightDOM.render(), this.__rightToggleDOM);
          break;
        }
      }
      $li.addClass(`x-active`);
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

}
