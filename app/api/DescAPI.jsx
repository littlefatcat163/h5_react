import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, xoSystem } from '../components'

export default class DescAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: '组件',
          list: [
            { 'data-target': 'component-struc', name: '结构' }
          ]
        },
        {
          name: 'API组件',
          list: [
            { 'data-target': 'api-struc', name: '结构' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'component-struc',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>结构</h2>
                <p>
                  一、构建组件继承<i className='xo-font-rose-red xo-margin-left-sm'>React.Component</i>
                </p>
                <p>
                  二、构建组件继承<i className='xo-font-rose-red xo-margin-left-sm'>BaseComponent</i>
                </p>
                <ul>
                  <li className='xo-margin-bottom-xs'>路径: 'component/BaseComponent.jsx'</li>
                  <li className='xo-margin-bottom-xs'>
                    注册浏览器窗口变化监测,
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      super.addResizeEventListener( )
                    </i>
                    ，然后重写
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      windowResize( )
                    </i>
                    浏览器窗口变化就会执行windowResize
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    注册浏览器窗口点击,
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      super.addWindowClick( )
                    </i>
                    ，然后重写
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      windowClick( )
                    </i>
                    浏览器窗口点击就会执行windowClick
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    注册事件在
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>componentDidMount( )</i>
                    以便事件只会在该组件中注册一次
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    使用
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>super.componentDidMount( )</i>
                    实例化出继承
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>BaseComponent</i>
                    的属性内容，如<span className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>$dom</span>
                    ，然后才可以直接
                    <span className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>hide( )</span>，
                    <span className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>show( )</span>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    取消注册事件在
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>componentWillUnmount( )</i>
                    组件销毁的时候注销事件，避免多余的无用window事件存在
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    取消注册事件使用
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>super.removeEventListener( )</i>
                    或
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>super.componentWillUnmount( )</i>
                    取消组件中注册过的事件，该方法会自行监测注册了哪个事件，便取消调哪个事件
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    获取React的dom节点
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>super.findReactDOMNode( e, domName )</i>
                    主要用于触发事件需要获取该节点所在的react对象，e为触发点， domName为e所在的层级的element.name 默认为e.currentTarget.namen
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    隐藏当前组件
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>hide( )</i>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    显示当前组件
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>show( )</i>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    设置数据
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>setData( data )</i>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    获取数据
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>getData( )</i>
                  </li>
                </ul>
              </div>
            )
          }
        },
        {
          'data-toggle': 'api-struc',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>结构</h2>
                <p>
                  一、构建组件继承<i className='xo-font-rose-red xo-margin-left-sm'>React.Component</i>
                </p>
                <p>
                  二、构建组件继承<i className='xo-font-rose-red xo-margin-left-sm'>BaseComponent</i>
                </p>
                <ul>
                  <li className='xo-margin-bottom-xs'>
                    路径: 'api/BaseComponent.jsx'
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    该组件中以提供api的基本样式与事件，如需要该样式及事件，如下编辑即可，反之，则重写对应的方法，或直接使用React.Component生命周期自行定义
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    左边菜单
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      getLeftDOMList( )
                    </i>
                    => return Array 如下所示，
                    <br/>
                    <Code>
                      {
                        `getLeftDOMList() {\n` +
                          `\treturn (\n` +
                            `\t\t[\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\tname: '组件',\n` +
                                `\t\t\t\tlist: [\n` +
                                  `\t\t\t\t\t{ 'data-target': 'component-struc', name: '结构' }\n` +
                                `\t\t\t\t]\n` +
                              `\t\t\t},\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\tname: 'API组件',\n` +
                                `\t\t\t\tlist: [\n` +
                                  `\t\t\t\t\t{ 'data-target': 'api-struc', name: '结构' }\n` +
                                `\t\t\t\t]\n` +
                              `\t\t\t}\n` +
                            `\t\t]\n` +
                          `\t)\n` +
                        `}`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    右边显示内容
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>
                      getRightDOMList( )
                    </i>
                    => return Array 如下所示，
                    <br/>
                    <Code>
                      {
                        `getRightDOMList() {\n` +
                          `\treturn (\n` +
                            `\t\t[\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\t'data-toggle': 'component-struc',\n` +
                                `\t\t\t\trender: () => {\n` +
                                  `\t\t\t\t\treturn (\n` +
                                    `\t\t\t\t\t\t<div className='xo-padding-xs'>\n` +
                                      `\t\t\t\t\t\t\t...\n` +
                                    `\t\t\t\t\t\t</div>\n` +
                                  `\t\t\t\t\t)\n` +
                                `\t\t\t\t}\n` +
                              `\t\t\t},\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\t'data-toggle': 'api-struc',\n` +
                                `\t\t\t\trender: () => {\n` +
                                  `\t\t\t\t\treturn (\n` +
                                    `\t\t\t\t\t\t<div className='xo-padding-xs'>\n` +
                                      `\t\t\t\t\t\t\t...\n` +
                                    `\t\t\t\t\t\t</div>\n` +
                                  `\t\t\t\t\t)\n` +
                                `\t\t\t\t}\n` +
                              `\t\t\t}\n` +
                            `\t\t]\n` +
                          `\t)\n` +
                        `}`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    其中
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>'data-target'</i>
                    对应
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>'data-toggle'</i>
                    demo可以参考
                    <i className='xo-font-rose-red xo-margin-left-sm xo-margin-right-sm'>'api/DescAPI.jsx'</i>
                  </li>
                </ul>
              </div>
            )
          }
        }
      ]
    )
  }

}
