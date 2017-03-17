import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './api.scss'
import { isEmpty } from '../tool/_XTool'
import { Code } from '../components'

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

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.__leftTargetDOM);
    ReactDOM.unmountComponentAtNode(this.__rightToggleDOM);
  }

  renderLeftDOM() {
    let leftDOMList = this.getLeftDOMList();
    let lis = <li>
                <div>demo</div>
                <ul>
                  <li data-target='demo'>样例</li>
                </ul>
              </li>;
    if(leftDOMList && leftDOMList.length > 0) {
      lis = [];
      leftDOMList.forEach(function(o, oi) {
        let ilis = null;
        if(o.list && o.list.length > 0) {
          ilis = [];
          o.list.forEach(function(i, ii) {
            ilis.push(<li key={`xo-api-left-ili-${ii}`} data-target={i['data-target']}> {i.name} </li>);
          });
        }

        lis.push(<li key={`xo-api-left-oli-${oi}`}><div>{ o.name }</div><ul>{ ilis }</ul></li>);
      });
    }

    return (
      <div className='xo-api-left-list'>
        <ul className='xo-api-left-ul'>
          <h3>{this.props.routeParams.name}</h3>
          { lis }
        </ul>
      </div>
    )
  }

  getLeftDOMList() {
    return (
      [
        {
          name: 'demo',
          list: [
            { 'data-target': 'demo', name: '例子' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'demo',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <p>
                  请重写以下两个方法，参考例子
                </p>
                <p>1、<b className='xo-font-primary'>getLeftDOMList</b> 返回左边列表的json格式</p>
                <Code>
                  {
                    `getLeftDOMList() {\n` +
                      `\treturn(\n` +
                        `\t\t[\n` +
                          `\t\t\t{\n` +
                            `\t\t\t\tname: 'demo',\n` +
                            `\t\t\t\tlist: [\n` +
                              `\t\t\t\t\t{ 'data-target': 'demo', name: '例子' }\n` +
                            `\t\t\t\t]\n` +
                          `\t\t\t}\n` +
                        `\t\t]\n` +
                      `\t)\n` +
                    `}`
                  }
                </Code>
                <br/>
                <p>
                  2、<b className='xo-font-primary'>getRightDOMList</b>
                  返回右边对应左边列表data-target的显示内容
                </p>
                <Code>
                  {
                    `getRightDOMList() {\n` +
                      `\treturn(\n` +
                        `\t\t[\n` +
                          `\t\t\t{\n` +
                            `\t\t\t\tdata-toggle: 'demo',\n` +
                            `\t\t\t\trender: function() {\n` +
                              `\t\t\t\t\treturn (<div></div>)\n` +
                            `\t\t\t\t}\n` +
                          `\t\t\t}\n` +
                        `\t\t]\n` +
                      `\t)\n` +
                    `}`
                  }
                </Code>
                <p>
                  <b>注意：</b>
                  data-toggle与data-target相呼应，显示内容有render决定
                </p>
              </div>
            )
          }
        }
      ]
    )
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
