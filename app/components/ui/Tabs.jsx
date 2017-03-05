import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import xoSystem from '../../tool/_xoSystem'

import './tab.scss'

const __tabOnClick = Symbol(`__tabOnClick`)

export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let tabs = [];

    return (
      <div className='xo-tabs'>
        <div className='xo-tabs-list xo-tabs-list-top'>
          <div className='xo-tabs-list-nav'>
            <div className='xo-tabs-bar'></div>
            {
              React.Children.map(this.props.children, (children, index) => {
                return (<div onClick={(e) => this[__tabOnClick](e)} className='xo-tabs-tab' data-index={index} data-target={children.props.id}>{children.props.text}</div>);
              })
            }
          </div>
        </div>
        <div className='xo-tabs-content'>
          <div className='xo-tabs-content-scroll'>
          {
            React.Children.map(this.props.children, (children, index) => {
              return React.cloneElement(children, { 'data-index': index })
            })
          }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).find('.xo-tabs-tab')[0].click();
  }

  [__tabOnClick](e) {
    let $target = $(e.target);
    $target.addClass('xo-active');
    $target.siblings('.xo-tabs-tab').removeClass('xo-active');
    $(ReactDOM.findDOMNode(this)).find('.xo-tabs-bar')
                                    .width(e.target.offsetWidth)
                                    .css({ transform: `translateX(${e.target.offsetLeft}px)` });
    $(ReactDOM.findDOMNode(this)).find('.xo-tabs-pane').removeClass('xo-active');
    $(ReactDOM.findDOMNode(this)).find(`.xo-tabs-pane[data-index=${$target.attr('data-index')}]`).addClass('xo-active');
    if(xoSystem.getBrowser().ie && xoSystem.getBrowser().version <= 9) {
      $(ReactDOM.findDOMNode(this)).find('.xo-tabs-pane').hide();
      $(ReactDOM.findDOMNode(this)).find(`.xo-tabs-pane[data-index=${$target.attr('data-index')}]`).show();
      return;
    }
    $(ReactDOM.findDOMNode(this)).find('.xo-tabs-content-scroll').css({ left: -parseInt($target.attr('data-index')) * 100 + '%' });
  }

}

Tabs.TabPane = class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='xo-tabs-pane' data-index={this.props['data-index']} data-toggle={this.props.id}>
        <div className='xo-tabs-pane-modal'></div>
        {this.props.children}
      </div>
    )
  }

}
