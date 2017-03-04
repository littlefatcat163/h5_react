import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from './BaseComponent'
import { Tabs, Code } from '../components'

export default class Layout extends BaseComponent {

  constructor(props) {
    super(props);
  }

  renderLeftDOM() {
    return (
      <div className='xo-api-left-list'>
        <ul className='xo-api-left-ul'>
          <h3>布局</h3>
          <li>
            <div>layout</div>
            <ul>
              <li data-target='layoutGrid'>栅格</li>
              <li data-target='layoutPos'>定位</li>
            </ul>
          </li>
          <li>
            <div>flex</div>
            <ul>
              <li>布局</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  getRightDOMList() {

    return (
      [
        {
          'data-toggle': `layoutGrid`,
          render: function() {
            return (
              <div className='xo-col-lg-12'>
                <h1>Grid 栅格</h1>
                <p>12栅格系统</p>
                <h2>实例</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-border-primary" style={{padding: 20}}>
                        <div className="xo-demo-block xo-row">
                          <div className="xo-col-lg-6">xo-col-lg-6</div>
                          <div className="xo-col-lg-6">xo-col-lg-6</div>
                        </div>
                        <div className="xo-demo-block xo-row">
                          <div className="xo-push-lg-5 xo-col-lg-7">xo-push-lg-5 xo-col-lg-7</div>
                          <div className="xo-pull-lg-7 xo-col-lg-5">xo-pull-lg-7 xo-col-lg-5</div>
                        </div>
                        <div className="xo-demo-block xo-row">
                          <div className="xo-offset-lg-3 xo-col-lg-5">xo-offset-lg-3 xo-col-lg-5</div>
                        </div>
                        xo-layout
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className="xo-layout">\n` +
                          `\t<div className="xo-row">\n` +
                            `\t\t<div className="xo-col-lg-6">xo-col-lg-6</div>\n` +
                            `\t\t<div className="xo-col-lg-6">xo-col-lg-6</div>\n` +
                          `\t</div>\n` +
                          `\t<div className="xo-row">\n` +
                            `\t\t<div className="xo-push-lg-5 xo-col-lg-7">xo-push-lg-5 xo-col-lg-7</div>\n` +
                            `\t\t<div className="xo-pull-lg-7 xo-col-lg-5">xo-pull-lg-7 xo-col-lg-5</div>\n` +
                          `\t</div>\n` +
                          `\t<div className="xo-row">\n` +
                            `\t\t<div className="xo-offset-lg-3 xo-col-lg-5">xo-offset-lg-3 xo-col-lg-5</div>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>容器</h2>
                <ul className="xo-ul">
                  <li>
                    class="xo-container",
                    <i>水平居中,根据当前分辨率调整宽度,高度自适应,用于外部</i>
                  </li>
                  <li>
                    class="xo-row",
                    <i>行容器,左右外边距-15px,用于栅格"class*=xo-col-"上级,(栅格左右内边距+15px)</i>
                  </li>
                  <li>
                    class="xo-layout",
                    <i>布局容器,主要用于防止内部元素浮动错位,自适应大小</i>
                  </li>
                </ul>
                <br/>
                <h2>概述</h2>
                <p>
                  基于行与列来定义的展示布局,以保证页面的每个区域能够稳健地排布起来, <b>12栅格</b>
                </p>
                <table className='xo-table' cellSpacing='0' cellPadding="0">
                  <thead>
                    <tr>
                      <th></th>
                      <th>{'(<768px)'}</th>
                      <th>{'(>=768px)'}</th>
                      <th>{'(>=992px)'}</th>
                      <th>{'(>=1200px)'}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>栅格行为</td>
                      <td>水平</td>
                      <td>分辨率范围内是水平的</td>
                      <td>分辨率范围内是水平的</td>
                      <td>分辨率范围内是水平的</td>
                      <td><i>position: relative;</i></td>
                    </tr>
                    <tr>
                      <td>最小分辨率</td>
                      <td>auto</td>
                      <td>576px</td>
                      <td>768px</td>
                      <td>992px</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>栅格class前缀</td>
                      <td>.xo-col-xs-</td>
                      <td>.xo-col-sm-</td>
                      <td>.xo-col-md-</td>
                      <td>.xo-col-lg-</td>
                      <td><i>class='xo-col-xs-6'</i> => width: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格左偏移class前缀</td>
                      <td>.xo-push-xs-</td>
                      <td>.xo-push-sm-</td>
                      <td>.xo-push-md-</td>
                      <td>.xo-push-lg-</td>
                      <td><i>class='xo-push-6'</i> => left: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格右偏移class前缀</td>
                      <td>.xo-pull-xs-</td>
                      <td>.xo-pull-sm-</td>
                      <td>.xo-pull-md-</td>
                      <td>.xo-pull-lg-</td>
                      <td><i>class='xo-pull-6'</i> => right: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格左外边距class前缀</td>
                      <td>.xo-offset-xs-</td>
                      <td>.xo-offset-sm-</td>
                      <td>.xo-offset-md-</td>
                      <td>.xo-offset-lg-</td>
                      <td><i>class='xo-offset-6'</i> => margin-left: 50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
        },
        {
          'data-toggle': 'layoutPos',
          render: function() {
            return (
              <div className='xo-col-lg-12'>
                <h1>定位</h1>
                <p>
                  水平居中，垂直居中，水平垂直居中，父级容器对应内部元素的大小适应程度，
                  相邻元素的大小适应等，以下提供常用的定位
                </p>
                <h2>一、水平居中</h2>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-border-primary xo-demo-block">
                        <div className="xo-horizontal">
                          xo-horizontal
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout">\n` +
                          `\t<div className="xo-horizontal">\n` +
                            `\t\txo-horizontal\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>二、垂直居中</h2>
                <p>
                  1、使用上级容器，并定位为
                </p>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout">
                        <div></div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        }
      ]
    )

  }

}
