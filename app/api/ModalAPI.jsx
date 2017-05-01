import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, Modal, xoSystem } from '../components'

export default class ModalAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'modal',
          list: [
            { 'data-target': 'modal', name: '模态框' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'modal',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>模态框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button className='xo-margin-right-xs'
                        onClick={() => { Modal.confirm({title: 'confirm', body: <p>test confirm</p>, okText: '确定', cancelText: '取消', close: (result) => { console.log(result) }}) }}>
                        confirm allowDrag allowResize
                      </Button>
                      <Button className='xo-margin-right-xs'
                        onClick={() => { Modal.confirm({title: 'confirm', body: <p>test confirm</p>, allowDrag: false, allowResize: false}) }}>
                        confirm
                      </Button>
                      <Button
                        className='xo-margin-right-xs'
                        onClick={() => { Modal.info('info test') }}>
                        info
                      </Button>
                      <Button
                        className='xo-margin-right-xs'
                        onClick={() => { Modal.success('success test', 3000) }}>
                        success
                      </Button>
                      <Button
                        className='xo-margin-right-xs'
                        onClick={() => { Modal.warn('warn test', 4000) }}>
                        warn
                      </Button>
                      <Button
                        className='xo-margin-right-xs'
                        onClick={() => { Modal.danger('danger test', 2500) }}>
                        danger
                      </Button>
                      <Button
                        className='xo-margin-right-xs'
                        onClick={() => { Modal.destroy() }}>
                        destroyNotice
                      </Button>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.confirm({title: 'confirm', body: <p>test confirm</p>, okText: '确定', cancelText: '取消', close: (result) => { console.log(result) }}) }}>\n` +
                          `\tconfirm allowDrag allowResize\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.confirm({title: 'confirm', body: <p>test confirm</p>, allowDrag: false, allowResize: false}) }}>\n` +
                          `\tconfirm\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.info('info test') }}>\n` +
                          `\tinfo\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.success('success test', 3000) }}>\n` +
                          `\tsuccess\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.warn('warn test', 4000) }}>\n` +
                          `\twarn\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.danger('danger test', 2500) }}>\n` +
                          `\tdanger\n` +
                        `</Button>\n` +
                        `<Button\n` +
                          `\tclassName='xo-margin-right-xs'\n` +
                          `\tonClick={() => { Modal.destroy() }}>\n` +
                          `\tdestroyNotice\n` +
                        `</Button>\n`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
                <p>Modal.method</p>
                <Table
                  columns={methodColumns}
                  data={
                    [
                      {
                        name: 'confirm( properties )',
                        param: 'properties<obj>\n{\n title<element>, \n body<element>, \n close<func>, \n allowDrag<bool>, \n allowResize<bool>, \n okText<string>, \n cancelText<string> }',
                        desc: '对话框\n\{ \ntitle: 标题, \nbody: 内容, \nclose: (result) => {...} 关闭回调,确定按钮返回true,关闭按钮返回false,\nallowDrag: 允许拖拽,\nallowResize: 允许拉伸,\nokText: 确定按钮显示文本,\ncancelText: 取消按钮显示文本\n \}'
                      },
                      {
                        name: 'warn( body, duration )',
                        param: 'body<element>,\n duration<number>',
                        desc: '警告框,\n body:内容,\n duration:存在时间，单位毫秒, 默认2000'
                      },
                      {
                        name: 'info( body, duration )',
                        desc: '同上'
                      },
                      {
                        name: 'success( body, duration )',
                        desc: '同上'
                      },
                      {
                        name: 'danger( body, duration )',
                        desc: '同上'
                      },
                      {
                        name: 'destroy( )',
                        desc: '销毁提示框(如warn,info...)'
                      }
                    ]
                  }
                  config={
                    {onCellRender: methodCellRender}
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
