import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, DatePicker } from '../components'

export default class LoadingAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'Date',
          list: [
            {
              'data-target': 'datePicker',
              'name': '日期选择框'
            }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'datePicker',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>日期选择框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs xo-layout'>
                      <DatePicker ref={(date) => this.date = date} data={new Date()}/>
                      <div className='xo-margin-top-xs'>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.hide()}>hide</Button>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.show()}>show</Button>
                        <Button className='xo-margin-right-xs' onClick={() => console.log(this.date.getValue())}>getValue</Button>
                        <Button className='xo-margin-right-xs' onClick={() => console.log(this.date.getData())}>getData</Button>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.disable()}>disable</Button>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.enable()}>enable</Button>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.setFormat('dd日m月 yyyy年')}>setFormat</Button>
                        <Button className='xo-margin-right-xs' onClick={() => this.date.setData(new Date())}>setData</Button>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-padding-xs xo-layout'>\n` +
                          `\t<DatePicker ref={(date) => this.date = date} data={new Date()}/>\n` +
                          `\t<div className='xo-margin-top-xs'>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.hide()}>hide</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.show()}>show</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => console.log(this.date.getValue())}>getValue</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => console.log(this.date.getData())}>getData</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.disable()}>disable</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.enable()}>enable</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.setFormat('dd日m月 yyyy年')}>setFormat</Button>\n` +
                            `\t\t<Button className='xo-margin-right-xs' onClick={() => this.date.setData(new Date())}>setData</Button>\n` +
                          `\t</div>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
                <p>prop</p>
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
                      {name: 'data', type: 'Date', desc: '数据(日期)'},
                      {name: 'disabled', type: 'bool', default: 'false', desc: '禁用'},
                      {name: 'format', type: 'string', default: 'YYYY-MM-DD', desc:'日期格式'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
                  <p>
                    method
                  </p>
                  <Table
                    columns={methodColumns}
                    data={
                      [
                        { name: 'hide( )', desc: '隐藏' },
                        { name: 'show( )', desc: '显示' },
                        { name: 'enable( )', desc: '启用' },
                        { name: 'disable( )', desc: '禁用' },
                        { name: 'setData( data )', param: 'data<Date>', desc: '日期' },
                        { name: 'getData( )', desc: '获取数据', return: 'Date' },
                        { name: 'getValue( )', return: 'string', desc: '对应format' },
                        { name: 'setFormat( format )', param: 'format<string>', desc: 'yyyy-mm-dd (y,m,d大小写忽略)' }
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
