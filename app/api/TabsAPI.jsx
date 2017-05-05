import React from 'react'

import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table, Icon, xoSystem } from '../components'

export default class SelectAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'Tabs',
          list: [
            { 'data-target': 'tabs', name: '标签页' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'tabs',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <Tabs allowEdit={true} ref={(refTabs) => this.refTabs = refTabs}>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-margin-bottom-xs'>
                      <Button className='xo-margin-right-xs' onClick={() => this.refTabs.add(<Tabs.TabPane text='test add'><p>add Tabs.TabPane</p></Tabs.TabPane>, false)}>add( {"<Tabs.TabPane />, false"} )</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refTabs.remove(2, 'index')}>remove(2, 'index')</Button>
                    </div>
                    <div className='xo-margin-bottom-xs'>
                      <Button className='xo-margin-right-xs' onClick={() => this.refTabs.add(<Tabs.TabPane key='test tabs key' allowEdit={true} text='test add'><p>add Tabs.TabPane</p></Tabs.TabPane>)}>add( {"<Tabs.TabPane key='test tabs key' allowEdit=\{true\} />"} )</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refTabs.remove(2, 'index')}>remove('test tabs key')</Button>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Tabs allowEdit={true} ref={(refTabs) => this.refTabs = refTabs}>\n` +
                          `\t<Tabs.TabPane text='效果'>\n` +
                            `\t\t<div className='xo-margin-bottom-xs'>\n` +
                              `\t\t\t<Button className='xo-margin-right-xs' onClick={() => this.refTabs.add(<Tabs.TabPane text='test add'><p>add Tabs.TabPane</p></Tabs.TabPane>, false)}>add( {"<Tabs.TabPane />, false"} )</Button>\n` +
                              `\t\t\t<Button className='xo-margin-right-xs' onClick={() => this.refTabs.remove(2, 'index')}>remove(2, 'index')</Button>\n` +
                            `\t\t</div>\n` +
                            `\t\t<div className='xo-margin-bottom-xs'>\n` +
                              `\t\t\t<Button className='xo-margin-right-xs' onClick={() => this.refTabs.add(<Tabs.TabPane key='test tabs key' allowEdit={true} text='test add'><p>add Tabs.TabPane</p></Tabs.TabPane>)}>add( {"<Tabs.TabPane key='test tabs key' allowEdit=\{true\} />"} )</Button>\n` +
                              `\t\t\t<Button className='xo-margin-right-xs' onClick={() => this.refTabs.remove(2, 'index')}>remove('test tabs key')</Button>\n` +
                            `\t\t</div>\n` +
                          `\t</Tabs.TabPane>\n` +
                          `\t<Tabs.TabPane text='代码'>\n` +
                            `\t\t{'...'}\n` +
                          `\t</Tabs.TabPane>\n` +
                        `</Tabs>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
                <p>Tabs.props</p>
                <Table
                  columns={
                    [
                      {title: 'name', field: 'name', width: 200},
                      {title: 'type', field: 'type', width: 100},
                      {title: 'default', field: 'default', width: 200},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'allowEdit', type: 'bool', default: 'false', desc: '允许Tabs编辑Tabs.TabPane, 默认创建的Tabs.TabPane随之携带allowEdit属性'},
                      {name: 'onEdit', type: 'func', desc: '(tabs) => return <Tabs.TabsPane>...</Tabs.TabsPane> \n Tabs.add( ) 会引用该属性的返回值'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
                  <p>Tabs.method</p>
                  <Table
                    columns={methodColumns}
                    data={
                      [
                        { name: 'hide( )', desc: '隐藏' },
                        { name: 'show( )', desc: '显示' },
                        { name: 'add( nav, isToggle )', param: 'nav<Tabs.TabPane>, isToggle<bool>', desc: '添加TabPane\n nav: (默认null，受props.onEidt返回值影响)，TabsPane，\n isToggle: (默认true), 创建完毕后触发该节点' },
                        { name: 'remove( key, label )', param: 'key<string/number>, label<enum>("key","index")', desc: '删除TabPane\n key: 对应TabPane的key或index\n, label: 默认"key"，声明key是根据key去删除，"index"则是声明key根据下标删除,此刻key<0则是倒序下标'},
                        { name: 'refesh( )', desc: '刷新' }
                      ]
                    }
                    config={
                      {onCellRender: methodCellRender}
                    }
                    />
                <p>Tabs.TabPane.props</p>
                <Table
                  columns={
                    [
                      {title: 'name', field: 'name', width: 200},
                      {title: 'type', field: 'type', width: 100},
                      {title: 'default', field: 'default', width: 200},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'allowEdit', type: 'bool', default: 'false', desc: '允许Tabs.TabPane编辑'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
              </div>
            )
          }
        }
      ]
    )
  }

}


//表格渲染描述
const cellRender = (sender) => {
  if(sender.column.field == 'desc' && !xoSystem.isEmpty(sender.data.desc)) {
    let descList = sender.data.desc.split('\n');
    return(
      descList.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })
    )
  }
}

const methodColumns = [
  {title: 'name', field: 'name', width: 200},
  {title: 'param', field: 'param', width: 200},
  {title: 'desc', field: 'desc'},
  {title: 'return', field: 'return', width: 200}
]

const methodCellRender = (sender) => {
  let fieldName = null;
  if(sender.column.field == 'param') fieldName = 'param';
  if(sender.column.field == 'desc') fieldName = 'desc';
  if(!xoSystem.isEmpty(sender.data[fieldName])) {
    let descList = sender.data[fieldName].split('\n');
    return(
      descList.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })
    )
  }
}
