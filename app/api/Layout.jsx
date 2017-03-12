import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from './BaseComponent'
import { Tabs, Code } from '../components'

export default class Layout extends BaseComponent {

  constructor(props) {
    super(props);
  }

  getLeftDOMList() {

    return (
      [
        {
          name: 'layout',
          list: [
            { 'data-target': 'layoutGrid', name: '栅格' },
            { 'data-target': 'layoutPos', name: '居中' }
          ]
        },
        {
          name: 'flex',
          list: [
            { 'data-target': 'flexLayout', name: '布局' },
            { 'data-target': 'flexDisplay', name: '容器' },
            { 'data-target': 'flexWrap', name: '换行' },
            { 'data-target': 'flexJustifyContent', name: '主轴对齐' },
            { 'data-target': 'flexAlignItems', name: '交叉轴对齐1' },
            { 'data-target': 'flexAlignContent', name: '交叉轴对齐2' },
            { 'data-target': 'flexItem', name: '项目属性' }
          ]
        }
      ]
    )

  }

  // renderLeftDOM() {
  //   return (
  //     <div className='xo-api-left-list'>
  //       <ul className='xo-api-left-ul'>
  //         <h3>布局</h3>
  //         <li>
  //           <div>layout</div>
  //           <ul>
  //             <li data-target='layoutGrid'>栅格</li>
  //             <li data-target='layoutPos'>居中</li>
  //           </ul>
  //         </li>
  //         <li>
  //           <div>flex</div>
  //           <ul>
  //             <li data-target='flexLayout'>布局</li>
  //             <li data-target='flexDisplay'>容器</li>
  //             <li data-target='flexWrap'>换行</li>
  //             <li data-target='flexJustifyContent'>主轴对齐</li>
  //             <li data-target='flexAlignItems'>交叉轴对齐1</li>
  //             <li data-target='flexAlignContent'>交叉轴对齐2</li>
  //             <li data-target='flexItem'>项目属性</li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   )
  // }

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
                    <div style={{padding: 20}} onClick={() => console.log('...')}>
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
                      <td>xo-col-xs-</td>
                      <td>xo-col-sm-</td>
                      <td>xo-col-md-</td>
                      <td>xo-col-lg-</td>
                      <td><i>class='xo-col-xs-6'</i> => width: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格左偏移class前缀</td>
                      <td>xo-push-xs-</td>
                      <td>xo-push-sm-</td>
                      <td>xo-push-md-</td>
                      <td>xo-push-lg-</td>
                      <td><i>class='xo-push-6'</i> => left: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格右偏移class前缀</td>
                      <td>xo-pull-xs-</td>
                      <td>xo-pull-sm-</td>
                      <td>xo-pull-md-</td>
                      <td>xo-pull-lg-</td>
                      <td><i>class='xo-pull-6'</i> => right: 50%</td>
                    </tr>
                    <tr>
                      <td>栅格左外边距class前缀</td>
                      <td>xo-offset-xs-</td>
                      <td>xo-offset-sm-</td>
                      <td>xo-offset-md-</td>
                      <td>xo-offset-lg-</td>
                      <td><i>class='xo-offset-6'</i> => margin-left: 50%</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                <h2>注意</h2>
                <p>
                  1、栅格布局支持撑起父容器高度，但是无法让相邻栅格高度自行匹配(除了自行设置其高度一致外)
                </p>
                <p>{`     如下所示：`}</p>
                <p>{`     审核该DOM，看见xo-row与xo-layout跟随右边的300高度的变化，而左边的却还是自适应，没什么变化`}</p>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout">
                        <div className="xo-row xo-demo-block xo-border-primary">
                          <div className="xo-col-xs-6">height=auto</div>
                          <div className="xo-col-xs-6" style={{height: 300}}>height=300</div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout">\n` +
                          `\t<div className="xo-row xo-demo-block xo-border-primary">\n` +
                            `\t\t<div className="xo-col-xs-6">height=auto</div>\n` +
                            `\t\t<div className="xo-col-xs-6" style={{height: 300}}>height=300</div>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p className="xo-margin-left-xs">
                  2、如果这时候需要使用到相邻元素能在栅格布局下，且能影响到高度自适应变化
                </p>
                <p>{`     如下所示：`}</p>
                <p>{`     融合表格，父级容器自适应高度，栅格相邻元素匹配高度`}</p>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-table">
                        <div className="xo-table-row xo-demo-block">
                          <div className="xo-col-xs-6 xo-table-cell">height=auto=100</div>
                          <div className="xo-col-xs-6 xo-table-cell" style={{height: 100}}>height=100</div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout xo-table">\n` +
                          `\t<div className="xo-table-row xo-demo-block">\n` +
                            `\t\t<div className="xo-col-xs-6 xo-table-cell">height=auto=100</div>\n` +
                            `\t\t<div className="xo-col-xs-6 xo-table-cell" style={{height: 100}}>height=100</div>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'layoutPos',
          render: function() {
            return (
              <div className='xo-col-lg-12'>
                <h1>居中</h1>
                <p>
                  水平居中，垂直居中，水平垂直居中，父级容器对应内部元素的大小适应程度，
                  相邻元素的大小适应等，以下提供常用的定位
                </p>
                <h2>一、水平居中</h2>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-border-primary xo-demo-block">
                        <div className="xo-h-c">
                          xo-horizontal
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout">\n` +
                          `\t<div className="xo-h-c">\n` +
                            `\t\txo-horizontal\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>二、垂直居中</h2>
                <p>
                  1、使用table与table-cell
                </p>
                <ul className="xo-ul xo-font-gray">
                  <li>一级父容器 (display: table; width: 100%)</li>
                  <li>二级父容器 (display: table-cell; vertical-align: middle)</li>
                  <li>垂直居中内容容器</li>
                  <li>这种方式没什么限制，就是容器多了一层，自适应内容</li>
                </ul>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-center-container xo-border-primary" style={{height: 100}}>
                        <div className="xo-v-c xo-demo-block">
                          <div>xo-vertical</div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-center-container" style={{height: 100}}>\n` +
                          `\t<div className="xo-v-c">\n` +
                            `\t\t<div>xo-vertical</div>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p>
                  2、父级容器(display: block; position: relative), 垂直居中容器( display: block; position: absolute; top: 0; bottom: 0; margin: auto; )
                </p>
                <p>
                <span className="xo-font-gray xo-margin-left-xs">注意:(这种方式需要垂直居中容器限制高度，且不能大于父级容器高度)</span>
                </p>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-border-primary xo-demo-block" style={{height: 200}}>
                        <div className="xo-v-c" style={{width: '100%', height: 90}}>
                          xo-vertical
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout" style={{height: 200}}>\n` +
                          `\t<div className="xo-v-c" style={{width: '100%', height: 90}}>\n` +
                            `\t\txo-vertical\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>三、水平垂直居中</h2>
                <p>
                  综合上面两种居中模式，这里提供常用的结构样式(自适应)
                </p>
                <Tabs>
                  <Tabs.TabPane text="效果">
                    <div style={{padding: 20}}>
                      <div className="xo-layout xo-border-primary" style={{height: 200}}>
                        <div className="xo-h-c xo-hvr">
                          <div className="xo-v-c xo-demo-block">
                            <div>
                              垂直水平居中
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text="代码">
                    <Code>
                      {
                        `<div className="xo-layout" style={{height: 200}}>\n` +
                          `\t<div className="xo-h-c xo-hvr">\n` +
                            `\t\t<div className="xo-v-c">\n` +
                              `\t\t\t<div>\n` +
                                `\t\t\t\t垂直水平居中\n` +
                              `\t\t\t</div>\n` +
                            `\t\t</div>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexLayout',
          render: function() {
            return (
              <div className='xo-col-lg-12'>
                <h1>flex 布局</h1>
                <div className='xo-layout xo-text-center'>
                  <div className='xo-row xo-margin-bottom-xs'>
                    <div className='xo-col-lg-12 xo-margin-bottom-xs'>
                      <h2 className='xo-margin-bottom-xs'>支持的浏览器</h2>
                    </div>
                  </div>
                  <div className='xo-row'>
                    <div className='xo-col-lg-1'></div>
                    <div className='xo-col-lg-2'>
                      <div className='xo-logo-3x-chrome'></div>
                      <h3>chrome</h3>
                      <h3>21+</h3>
                    </div>
                    <div className='xo-col-lg-2'>
                      <div className='xo-logo-3x-safari'></div>
                      <h3>safari</h3>
                      <h3>6.1+</h3>
                    </div>
                    <div className='xo-col-lg-2'>
                      <div className='xo-logo-3x-opera'></div>
                      <h3>opera</h3>
                      <h3>12.1+</h3>
                    </div>
                    <div className='xo-col-lg-2'>
                      <div className='xo-logo-3x-firefox'></div>
                      <h3>firefox</h3>
                      <h3>22+</h3>
                    </div>
                    <div className='xo-col-lg-2'>
                      <div className='xo-logo-3x-ie'></div>
                      <h3>ie</h3>
                      <h3>10+</h3>
                    </div>
                    <div className='xo-col-lg-1'></div>
                  </div>
                </div>
                <h1>概念图</h1>
                <div className='xo-demo-flex-layout-desc'></div>
                <div className='xo-h-c'>
                  <p>
                    容器默认存在两根轴：水平的主轴（main axis）、垂直的交叉轴（cross axis）
                    <br/>
                    主轴的开始位置（与边框的交叉点）- main start，结束位置 - main end；
                    <br/>
                    交叉轴的开始位置 - cross start， 结束位置 - cross end
                  </p>
                </div>
                <br/>
                <div className='xo-layout'>
                  <table cellSpacing='0' className='xo-table xo-table-line'>
                    <thead>
                      <tr>
                        <th width='55'></th>
                        <th>class</th>
                        <th>css</th>
                        <th width='200'>效果</th>
                        <th width='200'>注意</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan='25'>flex</td>
                        <td>xo-flex</td>
                        <td>display: flex;</td>
                        <td>块级别flex</td>
                        <td>默认水平从左往右分布，不换行，主轴起点对齐，交叉轴自适应</td>
                      </tr>
                      <tr>
                        <td>xo-inline-flex</td>
                        <td>display: inline-flex;</td>
                        <td>行内块flex</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td>xo-row</td>
                        <td>flex-direction: row;</td>
                        <td>子元素水平从左往右(默认)</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-row-reverse</td>
                        <td>flex-direction: row-reverse;</td>
                        <td>子元素水平从右往左</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-column</td>
                        <td>flex-direction: column;</td>
                        <td>子元素水平从上往下</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-column-reverse</td>
                        <td>flex-direction: column-reverse;</td>
                        <td>子元素水平从下往上</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-nowrap</td>
                        <td>flex-wrap: nowrap;</td>
                        <td>不换行 （默认）</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-wrap</td>
                        <td>flex-wrap: wrap;</td>
                        <td>换行，往下排</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-wrap-reverse</td>
                        <td>flex-wrap: wrap-reverse;</td>
                        <td>换行，往上排</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-h-start</td>
                        <td>justify-content: flex-start;</td>
                        <td>主轴起点对齐 （默认）</td>
                        <td>与flex-direction相关</td>
                      </tr>
                      <tr>
                        <td>xo-h-end</td>
                        <td>justify-content: flex-end;</td>
                        <td>主轴终点对齐</td>
                        <td>与flex-direction相关</td>
                      </tr>
                      <tr>
                        <td>xo-h-center</td>
                        <td>justify-content: center;</td>
                        <td>主轴中点对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-h-space-between</td>
                        <td>justify-content: space-between;</td>
                        <td>主轴两端对齐，子元素之间的间隔相等</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-h-space-around</td>
                        <td>justify-content: space-around;</td>
                        <td>子元素两侧的间隔相等</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-v-start</td>
                        <td>align-items: flex-start;</td>
                        <td>交叉轴的起点对齐</td>
                        <td>与flex-direction相关</td>
                      </tr>
                      <tr>
                        <td>xo-v-end</td>
                        <td>align-items: flex-end;</td>
                        <td>交叉轴的终点对齐</td>
                        <td>与flex-direction相关</td>
                      </tr>
                      <tr>
                        <td>xo-v-center</td>
                        <td>align-items: center;</td>
                        <td>交叉轴的中点对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-v-baseline</td>
                        <td>align-items: baseline;</td>
                        <td>项目的第一行文字的基线对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-v-stretch</td>
                        <td>align-items: stretch;</td>
                        <td>如果项目未设置高度或设为auto，将占满整个容器的高度</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-vw-start</td>
                        <td>align-content: flex-start;</td>
                        <td>与交叉轴的起点对齐</td>
                        <td>容器内的各项没有占用交叉轴上所用的空间时对其容器的各项（垂直），容器内必须有多行的项目，才能有该属性的效果</td>
                      </tr>
                      <tr>
                        <td>xo-vw-end</td>
                        <td>align-content: flex-end;</td>
                        <td>与交叉轴的终点对齐</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td>xo-vw-center</td>
                        <td>align-content: center;</td>
                        <td>与交叉轴的中点对齐</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td>xo-vw-space-between</td>
                        <td>align-content: space-between;</td>
                        <td>与交叉轴两端对齐，轴线之间的间隔平均分布</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td>xo-vw-space-around</td>
                        <td>align-content: space-around;</td>
                        <td>每根轴线两侧的间隔都相等</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td>xo-vw-stretch</td>
                        <td>align-content: stretch;</td>
                        <td>轴线占满整个交叉轴（默认值）</td>
                        <td>同上</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td rowSpan='10'>item</td>
                        <td>xo-item</td>
                        <td>align-self: auto; （默认）</td>
                        <td>自适应</td>
                        <td>表示继承flex容器的align-items属性，如果没有flex容器，则等同于stretch</td>
                      </tr>
                      <tr>
                        <td>xo-item-start</td>
                        <td>align-self: flex-start;</td>
                        <td>交叉轴起点对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-item-end</td>
                        <td>align-self: flex-end;</td>
                        <td>交叉轴终点对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-item-center</td>
                        <td>align-self: center;</td>
                        <td>交叉轴中点对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-item-baseline</td>
                        <td>align-self: baseline;</td>
                        <td>第一行文字基线对齐</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>xo-item-stretch</td>
                        <td>align-self: stretch;</td>
                        <td>未设置高度或auto，占满整个容器交叉轴</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>order: {`<integer>`}</td>
                        <td>排列顺序，数值越小，排列越靠前，默认为0</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>flex-grow: {`<number>`}</td>
                        <td>放大比例，默认为0，即如果存在剩余空间，也不放大</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>flex-shrink: {`<number>`}</td>
                        <td>缩小比例，默认为1，即如果空间不足，该项目将缩小</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>flex-basis: {`<length>|auto`}</td>
                        <td>在分配多余空间之前，项目占据的主轴空间（main size），默认值为auto</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexDisplay',
          render: function() {
            return (
              <div className='xo-col-lg-12'>
                <h1>display</h1>
                <div className='xo-margin-left-lm'>
                  <p>
                    display: flex;
                    <br/>
                    display: inline-flex;
                    <br/>
                    与block和inline-block类似，定义容器是块元素或者是行内块元素
                    <br/>
                    <b>注意：display设定为flex后，子元素的float、clear、vertical-align属性无效。</b>
                  </p>
                </div>
                <br/>
                <h2>flex-direction</h2>
                <p>1、块级flex，子元素水平从左往右(默认) <b className='xo-font-primary'>flex-direction: row</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-demo-block xo-border-primary'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-3'>2</div>
                        <div className='xo-col-xs-3'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-demo-block xo-border-primary'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-3'>2</div>\n` +
                          `\t<div className='xo-col-xs-3'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>2、行内块flex，子元素水平从右往左 <b className='xo-font-primary'>flex-direction: row-reverse</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-inline-flex xo-row-reverse xo-demo-block xo-border-primary'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-3'>2</div>
                        <div className='xo-col-xs-3'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-inline-flex xo-row-reverse xo-demo-block xo-border-primary'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-3'>2</div>\n` +
                          `\t<div className='xo-col-xs-3'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p>3、行内块flex，子元素水平从上往下 <b className='xo-font-primary'>flex-direction: column</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-inline-flex xo-column xo-demo-block xo-border-primary'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-inline-flex xo-column xo-demo-block xo-border-primary'>\n` +
                          `\t<div>1</div>\n` +
                          `\t<div>2</div>\n` +
                          `\t<div>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p>4、块级flex，子元素水平从下往上 <b className='xo-font-primary'>flex-direction: column-reverse</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-inline-flex xo-column-reverse xo-demo-block xo-border-primary'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-inline-flex xo-column-reverse xo-demo-block xo-border-primary'>\n` +
                          `\t<div>1</div>\n` +
                          `\t<div>2</div>\n` +
                          `\t<div>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexWrap',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h1>flex-wrap</h1>
                <p>默认情况下，flex子元素排在一条线上。<b className='xo-font-primary'>flex-wrap</b> 控制换行。</p>
                <p>1、不换行 （默认）， <b className='xo-font-primary'>flex-wrap: nowrap</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-nowrap xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-6'>1</div>
                        <div className='xo-col-xs-7'>2</div>
                        <div className='xo-col-xs-8'>3</div>
                        <div className='xo-col-xs-12'>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-nowrap xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-6'>1</div>\n` +
                          `\t<div className='xo-col-xs-7'>2</div>\n` +
                          `\t<div className='xo-col-xs-8'>3</div>\n` +
                          `\t<div className='xo-col-xs-12'>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>2、换行，往下排，<b className='xo-font-primary'>flex-wrap: wrap</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-wrap xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-6'>1</div>
                        <div className='xo-col-xs-7'>2</div>
                        <div className='xo-col-xs-8'>3</div>
                        <div className='xo-col-xs-10'>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-wrap xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-6'>1</div>\n` +
                          `\t<div className='xo-col-xs-7'>2</div>\n` +
                          `\t<div className='xo-col-xs-8'>3</div>\n` +
                          `\t<div className='xo-col-xs-10'>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>3、换行，往上排，<b className='xo-font-primary'>flex-wrap: wrap-reverse</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap-reverse xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-6'>1</div>
                        <div className='xo-col-xs-7'>2</div>
                        <div className='xo-col-xs-9'>3</div>
                        <div className='xo-col-xs-11'>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap-reverse xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-6'>1</div>\n` +
                          `\t<div className='xo-col-xs-7'>2</div>\n` +
                          `\t<div className='xo-col-xs-9'>3</div>\n` +
                          `\t<div className='xo-col-xs-11'>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexJustifyContent',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h1>justify-content</h1>
                <p>
                  与flex-direction相关，如
                  <br/>
                  <b className='xo-font-primary'>flex-direction: row-reverse</b> -flex子元素从右往左分布
                  <br/>
                  <b className='xo-font-primary'>justify-content: flex-end</b> -flex子元素从末端对齐，看下展示
                </p>
                <p>1、子元素起始端对齐 （默认）， <b className='xo-font-primary'>justify-content: flex-start;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-h-start xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-h-start xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>2、子元素结尾端对齐， <b className='xo-font-primary'>justify-content: flex-end;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-h-end xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-h-end xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>3、子元素居中对齐， <b className='xo-font-primary'>justify-content: center;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-h-center xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-h-center xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>4、两端对齐，子元素之间的间隔相等 <b className='xo-font-primary'>justify-content: space-between;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-h-space-between xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-h-space-between xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>5、每个子元素两侧的间隔相等， <b className='xo-font-primary'>justify-content: space-around;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row-reverse xo-h-space-around xo-border-primary xo-demo-block'>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-h-space-around xo-border-primary xo-demo-block'>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexAlignItems',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h1>align-items</h1>
                <p>
                  与flex-direction相关，如
                </p>
                <p>1、交叉轴的起点对齐， <b className='xo-font-primary'>align-items: flex-start;</b></p>
                <div className='xo-margin-left-lm'>
                  <p>
                    flex-direction: column-reverse 子元素由下往上分布，且高度设置大些
                    <br/>
                    align-items: flex-start 子元素纵向起始端对齐，随着分布样式，也是由下往上分布
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-column-reverse xo-v-start xo-border-primary xo-demo-block' style={{height: 200}}>
                        <div className='xo-col-xs-3'>1</div>
                        <div className='xo-col-xs-4'>2</div>
                        <div className='xo-col-xs-2'>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row-reverse xo-v-start xo-border-primary xo-demo-block' style={{height: 200}}>\n` +
                          `\t<div className='xo-col-xs-3'>1</div>\n` +
                          `\t<div className='xo-col-xs-4'>2</div>\n` +
                          `\t<div className='xo-col-xs-2'>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>2、交叉轴的终点对齐， <b className='xo-font-primary'>align-items: flex-end;</b></p>
                <div className='xo-margin-left-lm'>
                  <p>
                    flex-direction: row 子元素由左往右分布
                    <br/>
                    align-items: flex-end 子元素纵向结尾端对齐，随着分布样式
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-v-end xo-demo-block xo-border-primary'>
                        <div>1</div>
                        <div style={{height: 80}}>2</div>
                        <div style={{height: 40}}>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-v-end xo-demo-block xo-border-primary'>\n` +
                          `\t<div>1</div>\n` +
                          `\t<div style={{height: 80}}>2</div>\n` +
                          `\t<div style={{height: 40}}>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>3、交叉轴的中点对齐， <b className='xo-font-primary'>align-items: flex-center;</b></p>
                <div className='xo-margin-left-lm'>
                  <p>
                    flex-direction: row 子元素由左往右分布
                    <br/>
                    align-items: flex-center 子元素纵向居中对齐
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-v-center xo-demo-block xo-border-primary' style={{height: 100}}>
                        <div style={{height: 40}}>1</div>
                        <div style={{height: 50}}>2</div>
                        <div style={{height: 80}}>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-v-center xo-demo-block xo-border-primary' style={{height: 100}}>\n` +
                          `\t<div style={{height: 40}}>1</div>\n` +
                          `\t<div style={{height: 50}}>2</div>\n` +
                          `\t<div style={{height: 80}}>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <div className='xo-margin-left-lm'>
                  <p>
                    flex-direction: column 子元素由上往下分布
                    <br/>
                    align-items: flex-center 子元素纵向居中对齐
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-column xo-v-center xo-demo-block xo-border-primary' style={{height: 200}}>
                        <div style={{height: 40}}>1</div>
                        <div style={{height: 50}}>2</div>
                        <div style={{height: 80}}>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-column xo-v-center xo-demo-block xo-border-primary' style={{height: 200}}>\n` +
                          `\t<div style={{height: 40}}>1</div>\n` +
                          `\t<div style={{height: 50}}>2</div>\n` +
                          `\t<div style={{height: 80}}>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p>
                  <b>对比水平分布和垂直分布的纵向居中对齐，可见对齐方式是以子元素撑起的大小为基准的，所以垂直分布对于纵向对齐效果不明显</b>
                </p>
                <br/>
                <p>4、项目的第一行文字的基线对齐， <b className='xo-font-primary'>align-items: baseline;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-v-baseline xo-demo-block xo-border-primary' style={{height: 100}}>
                        <div style={{height: 40}}>1</div>
                        <div style={{height: 50, paddingTop: 20}}>2</div>
                        <div style={{height: 80}}>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-v-baseline xo-demo-block xo-border-primary' style={{height: 100}}>\n` +
                          `\t<div style={{height: 40}}>1</div>\n` +
                          `\t<div style={{height: 50, paddongTop: 20}}>2</div>\n` +
                          `\t<div style={{height: 80}}>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>5、如果项目未设置高度或设为auto，将占满整个容器的高度 <b className='xo-font-primary'>align-items: stretch;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-v-stretch xo-demo-block xo-border-primary' style={{height: 100}}>
                        <div>1</div>
                        <div style={{height: 50}}>2</div>
                        <div>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-v-stretch xo-demo-block xo-border-primary' style={{height: 100}}>\n` +
                          `\t<div>1</div>\n` +
                          `\t<div style={{height: 50}}>2</div>\n` +
                          `\t<div>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexAlignContent',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h1>align-content</h1>
                <p>容器内的各项没有占用交叉轴上所用的空间时对其容器的各项（垂直），容器内必须有多行的项目，才能有该属性的效果</p>
                <p>1、与交叉轴的起点对齐， <b className='xo-font-primary'>align-content: flex-start;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-start xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-start xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>2、与交叉轴的终点对齐， <b className='xo-font-primary'>align-content: flex-end;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-end xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-end xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>3、与交叉轴的中点对齐， <b className='xo-font-primary'>align-content: center;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-center xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-center xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>4、与交叉轴两端对齐，轴线之间的间隔平均分布， <b className='xo-font-primary'>align-content: space-between;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-space-between xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-space-between xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>5、每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍， <b className='xo-font-primary'>align-content: space-around;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-space-around xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-space-around xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <p>6、轴线占满整个交叉轴。（默认值）， <b className='xo-font-primary'>align-content: stretch;</b></p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-wrap xo-vw-stretch xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>
                        <div style={{width: 40, height: 40}}>1</div>
                        <div style={{width: 40, height: 40}}>2</div>
                        <div style={{width: 60, height: 60}}>3</div>
                        <div style={{width: 60, height: 60}}>4</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-wrap xo-vw-stretch xo-border-primary xo-demo-block' style={{width: 100, height: 200}}>\n` +
                          `\t<div style={{width: 40, height: 40}}>1</div>\n` +
                          `\t<div style={{width: 40, height: 40}}>2</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>3</div>\n` +
                          `\t<div style={{width: 60, height: 60}}>4</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
              </div>
            )
          }
        },
        {
          'data-toggle': 'flexItem',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h1>order</h1>
                <div className='xo-margin-left-lm'>
                  <p>
                    定义项目的排列顺序。数值越小，排列越靠前，默认为0。
                  </p>
                  <p>
                    {
                      `style: { order: <integer> }`
                    }
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-border-primary xo-demo-block'>
                        <div style={{order: 3}}>1</div>
                        <div style={{order: 2}}>2</div>
                        <div style={{order: 1}}>3</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-border-primary xo-demo-block'>\n` +
                          `\t<div style={{order: 3}}>1</div>\n` +
                          `\t<div style={{order: 2}}>2</div>\n` +
                          `\t<div style={{order: 1}}>3</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h1>flex-grow</h1>
                <div className='xo-margin-left-lm'>
                  <p>定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p>
                  <p>
                    {
                      `style: { flex-grow: <number> }`
                    }
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-demo-block xo-border-primary'>
                        <div style={{flexGrow: 1}}>1</div>
                        <div style={{flexGrow: .5}}>0.5</div>
                        <div style={{flexGrow: 1.5}}>1.5</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-demo-block xo-border-primary'>\n` +
                          `\t<div style={{flexGrow: 1}}>1</div>\n` +
                          `\t<div style={{flexGrow: .5}}>0.5</div>\n` +
                          `\t<div style={{flexGrow: 1.5}}>1.5</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <div className='xo-margin-left-lm'>
                  <p>
                  如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
                  <br/>
                  如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
                  </p>
                </div>
                <br/>
                <h1>flex-shrink</h1>
                <div className='xo-margin-left-lm'>
                  <p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>
                  <p>
                    {
                      `style: { flex-shrink: <number> }`
                    }
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-demo-block xo-border-primary'>
                        <div style={{flexShrink: 0.3}}>0.3</div>
                        <div style={{flexShrink: 1}}>1</div>
                        <div style={{flexShrink: 1.5}}>1.5</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-demo-block xo-border-primary'>\n` +
                          `\t<div style={{flexShrink: 0.3}}>0.3</div>\n` +
                          `\t<div style={{flexShrink: 1}}>1</div>\n` +
                          `\t<div style={{flexShrink: 1.5}}>1.5</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <div className='xo-margin-left-lm'>
                  <p>
                  如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
                  <br/>
                  如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
                  </p>
                  <p>负值对该属性无效。</p>
                </div>
                <br/>
                <h1>flex-basis</h1>
                <div className='xo-margin-left-lm'>
                  <p>
                    属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
                    <br/>
                    浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
                  </p>
                  <p>
                    {
                      `style: { flex-basis: <length> | auto }`
                    }
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-border-primary xo-demo-block'>
                        <div style={{flexBasis: 100}}>100</div>
                        <div style={{flexBasis: 50}}>50</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-border-primary xo-demo-block'>\n` +
                          `\t<div style={{flexBasis: 100}}>100</div>\n` +
                          `\t<div style={{flexBasis: 50}}>50</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <div className='xo-margin-left-lm'>
                  <p>
                    它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
                  </p>
                </div>
                <br/>
                <h1>flex</h1>
                <div className='xo-margin-left-lm'>
                  <p>
                    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
                  </p>
                  <p>
                    {
                      `style: { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }`
                    }
                  </p>
                  <p>
                    该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
                  </p>
                  <p>
                    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
                  </p>
                </div>
                <br/>
                <h1>align-self</h1>
                <div className='xo-margin-left-lm'>
                  <p>
                    align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
                    <br/>
                    默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
                  </p>
                  <p>
                    {
                      `style: { align-self: auto | flex-start | flex-end | center | baseline | stretch }`
                    }
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-md'>
                      <div className='xo-flex xo-row xo-h-space-between xo-demo-block xo-border-primary' style={{height: 200}}>
                        <div className='xo-item'>xo-item</div>
                        <div className='xo-item-start'>xo-item-start</div>
                        <div className='xo-item-end'>xo-item-end</div>
                        <div className='xo-item-center'>xo-item-center</div>
                        <div className='xo-item-baseline'>xo-item-baseline</div>
                        <div className='xo-item-stretch' style={{height: 50}}>xo-item-stretch</div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-flex xo-row xo-h-space-between xo-demo-block xo-border-primary' style={{height: 200}}>\n` +
                          `\t<div className='xo-item'>xo-item</div>\n` +
                          `\t<div className='xo-item-start'>xo-item-start</div>\n` +
                          `\t<div className='xo-item-end'>xo-item-end</div>\n` +
                          `\t<div className='xo-item-center'>xo-item-center</div>\n` +
                          `\t<div className='xo-item-baseline'>xo-item-baseline</div>\n` +
                          `\t<div className='xo-item-stretch' style={{height: 50}}>xo-item-stretch</div>\n` +
                        `</div>`
                      }
                    </Code>
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
