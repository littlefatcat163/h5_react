import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'
import xoSystem from '../../tool/_xoSystem'

import './_tabs.scss'

const __tabOnClick = Symbol(`__tabOnClick`)
const _navs = Symbol(`_navs`)
const _navContents = Symbol(`_navContents`)
const _key = Symbol(`_key`)
const _addOnClick = Symbol(`_addOnClick`)
const _removeOnClick = Symbol(`_removeOnClick`)

export default class Tabs extends BaseComponent {

  refNav = null;
  refNavContent = null;
  refLeft = null;
  refRight = null;

  [_navs] = [];
  [_navContents] = [];
  [_key] = 0;

  constructor(props) {
    super(props);
  }

  render() {
    let add = null;
    if(this.props.allowEdit) add = <div unselectable='unselectable' className='xo-tabs-add' onClick={(e) => this[_addOnClick](e)}></div>;
    return (
      <div className='xo-tabs'>
        <div className='xo-tabs-header'>
          <div className='xo-tabs-list xo-tabs-list-top' ref={(refNav) => this.refNav = refNav}>
            {/*<div className='xo-tabs-list-nav'>
              <div className='xo-tabs-bar'></div>
              {
                React.Children.map(this.props.children, (children, index) => {
                  return (<div onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab' data-index={index}>{children.props.text}</div>);
                })
              }
            </div>*/}
          </div>
        </div>
        <div className='xo-tabs-content' ref={(refNavContent) => this.refNavContent = refNavContent}>
          {/*<div className='xo-tabs-content-scroll'>
          {
            React.Children.map(this.props.children, (children, index) => {
              return React.cloneElement(children, { 'data-index': index })
            })
          }
          </div>*/}
        </div>
        <span className='xo-tabs-left fa fa-angle-left' ref={(refLeft) => this.refLeft = refLeft} onClick={(e) => this.headerMove(1)}></span>
        { add }
        <span className='xo-tabs-right fa fa-angle-right' ref={(refRight) => this.refRight = refRight} onClick={(e) => this.headerMove(-1)}></span>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    super.addResizeEventListener();
    $(this.refLeft).hide();
    $(this.refRight).hide();
    React.Children.map(this.props.children, (children, index) => {
      if(xoSystem.isObject(children) && children.type.displayName == Tabs.TabPane.displayName) {
        let close = null;
        if(this.props.children.length > 0 && children.props.allowEdit) close = <span onClick={(e) => this[_removeOnClick](e)} className='xo-icon-close'></span>;
        let key = children.key;
        if(xoSystem.isEmpty(key)) key = this[_key];
        this[_navs].push(<div key={key} onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab'>{children.props.text}{close}</div>);
        this[_navContents].push(React.cloneElement(children, { key: key }));
        this[_key] ++;
      }
    })
    this.refesh(() => $(this.refNav).find('.xo-tabs-tab').first().click());
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  windowResize() {
    this.resize();
  }

  [__tabOnClick](e) {

    let $target = $(e.target);
    $target.addClass('xo-active');
    $target.siblings('.xo-tabs-tab').removeClass('xo-active');
    $(this.refNav).find('.xo-tabs-bar')
                  .width(e.target.offsetWidth)
                  .css({ transform: `translate3d(${e.target.offsetLeft}px, 0px, 0px)`});

    $(this.refNavContent).find('.xo-tabs-pane').removeClass('xo-active');

    if($(this.refNav).find('.xo-tabs-list-nav').width() > this.$dom.width()) {
      let tw = e.target.offsetLeft + e.target.offsetWidth;
      let nw = $(this.refNav).parent().width();
      if(this.refNav.offsetLeft < 0) nw -= this.refNav.offsetLeft;
      else nw += this.refNav.offsetLeft;
      if( tw > nw ) {
        $(this.refNav).css({left: -(tw - $(this.refNav).parent().width())})
      } else {
        let last = $(this.refNav).find('.xo-tabs-tab');
        last = last[last.length - 1];
        tw = last.offsetLeft + last.offsetWidth;
        if(tw < nw) {
          $(this.refNav).css({left: this.refNav.offsetLeft + (nw - tw)})
        }
      }
    }

    let key = super.findReactDOMNode(e).key;
    let index = -1;
    for(let i in this[_navContents]) {
      if(this[_navContents][i].key == key) {
        index = i;
        break;
      }
    }
    if(index == -1) return;
    let $togglePane = $($(this.refNavContent).find(`.xo-tabs-pane`)[index]);
    $togglePane.addClass('xo-active');
    if(xoSystem.getBrowser().ie && xoSystem.getBrowser().version <= 9) {
      $(this.refNavContent).find('.xo-tabs-pane').hide();
      $togglePane.show();
      $(this.refNav).find('.xo-tabs-bar').css({left: `${e.target.offsetLeft}px`});
      return;
    }
    $(this.refNavContent).find('.xo-tabs-content-scroll').css({ left: -index * 100 + '%' });
  }

  [_addOnClick](e) {
    this.add();
  }

  [_removeOnClick](e) {
    e.stopPropagation();
    e.preventDefault();
    let key = super.findReactDOMNode(e, 'div').key;
    this.remove(key);
  }

  refesh(callback) {
    ReactDOM.render(<div className='xo-tabs-list-nav'><div className='xo-tabs-bar'></div>{this[_navs]}</div>, this.refNav);
    ReactDOM.render(<div className='xo-tabs-content-scroll'>{this[_navContents]}</div>, this.refNavContent, () => { this.resize(); if(xoSystem.isFunc(callback)) callback(); });
  }

  add(nav, isToggle = true) {
    if(xoSystem.isObject(nav) && nav.type.displayName == Tabs.TabPane.displayName) {
      if(this[_navs].length == 1) {
        let close = null;
        if(this[_navContents][0].props.allowEdit) close = <span onClick={(e) => this[_removeOnClick](e)} className='xo-icon-close'></span>;
        this[_navs][0] = <div key={this[_navContents][0].key} onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab'>{this[_navContents][0].props.text}{close}</div>;
      }
      let close = null;
      if(this[_navs].length > 0 && nav.props.allowEdit) close = <span onClick={(e) => this[_removeOnClick](e)} className='xo-icon-close'></span>;
      let key = nav.key;
      let index = -1;
      if(xoSystem.isEmpty(key)) {
        key = this[_key];
      } else {
        for(let i in this[_navs]) {
          if(this[_navs][i].key == key) {
            index = i;
            break;
          }
        }
      }
      if(index == -1) {
        this[_navs].push(<div key={key} onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab'>{nav.props.text}{close}</div>);
        this[_navContents].push(React.cloneElement(nav, { key: key }));
      } else {
        this[_navs][index] = <div key={key} onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab'>{nav.props.text}{close}</div>;
        this[_navContents][index] = React.cloneElement(nav, { key: key });
      }
      this[_key] ++;
      this.refesh(() => { if(isToggle) $(this.refNav).find('.xo-tabs-tab').last().click(); });
    } else {
      let nav = null;
      if(xoSystem.isFunc(this.props.onEdit)) nav = this.props.onEdit(this);
      if(!nav) {
        nav = <Tabs.TabPane text='new tab' allowEdit={this.props.allowEdit}>new tab content</Tabs.TabPane>;
      }
      this.add(nav, isToggle);
    }
  }

  remove(key, label = 'key') {
    if(this[_navContents].length == 1) return;
    let index = -1;
    if(label == 'key') {
      for(let i in this[_navContents]) {
        if(this[_navContents][i].key == key) {
          index = i;
          break;
        }
      }
    } else if(label == 'index') {
      index = key;
      if(index < 0) index *= -1;
      if(index < this[_navContents].length) {
        if(key < 0) index = this[_navContents].length - index;
      } else index = -1;
    }
    if(index == -1) return;
    this[_navContents].splice(index, 1);
    this[_navs].splice(index, 1);
    let isActive = $($(this.refNav).find('.xo-tabs-tab')[index]).hasClass('xo-active');
    if(this[_navs].length == 1) {
      this[_navs][0] = <div key={this[_navContents][0].key} onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab'>{this[_navContents][0].props.text}</div>;
    }
    this.refesh(() => {
      if(isActive) {
        if(index == this[_navs].length) index = this[_navs].length - 1;
        $($(this.refNav).find('.xo-tabs-tab')[index]).click();
      } else {
        $(this.refNav).find('.xo-tabs-tab.xo-active').click();
      }
    });
  }

  resize() {
    let addWidth = 0;
    if(this.props.allowEdit) addWidth = 25;
    if($(this.refNav).find('.xo-tabs-list-nav').width() > this.$dom.width() - addWidth) {
      $(this.refRight).show();
      $(this.refNav).parent().width(this.refRight.offsetLeft - parseInt($(this.refNav).parent().css('marginLeft')));
      if(this.refNav.offsetLeft < 0) {
        if(!parseInt($(this.refNav).parent().css('marginLeft'))) {
          $(this.refLeft).show();
          $(this.refNav).parent().css({marginLeft: 25});
          $(this.refNav).css({left: this.refNav.offsetLeft - 25});
          $(this.refNav).parent().width(this.refRight.offsetLeft - parseInt($(this.refNav).parent().css('marginLeft')));
        }
      }
    } else {
      $(this.refRight).hide();
      $(this.refLeft).hide();
      $(this.refNav).parent().width(this.$dom.width() - addWidth);
      $(this.refNav).parent().css({marginLeft: 0});
      $(this.refNav).css({ left: 0 });
    }
  }

  headerMove(pix) {

    let left = this.refNav.offsetLeft + pix * $(this.refNav).parent().width();
    if(pix < 0)  {
      let limit = - $(this.refNav).find('.xo-tabs-list-nav').width() + $(this.refNav).parent().width();
      if(left < limit) left = limit;
    } else {
      if(left > 0) left = 0;
    }
    $(this.refNav).css({ left: left });
    this.resize();

  }

}

Tabs.propTypes = {
  allowEdit: React.PropTypes.bool,
  onEdit: React.PropTypes.func
}

Tabs.defaultProps = {
  allowEdit: false,
  onEdit: null
}

Tabs.displayName = 'Tabs';

Tabs.TabPane = class extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='xo-tabs-pane'>
        <div className='xo-tabs-pane-modal'></div>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
  }

}
Tabs.TabPane.displayName = 'Tabs.TabPane';
Tabs.TabPane.propTypes = {
  allowEdit: React.PropTypes.bool
}

Tabs.TabPane.defaultProps = {
  allowEdit: false
}
