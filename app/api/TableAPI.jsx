import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem } from '../components'

export default class TableAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'Table',
          list: [
            { 'data-target': 'table', name: '表格' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return [
      {
        'data-toggle': 'table',
        render: function() {
          return (
            <div className='xo-col-xs-12'>
              <h2>表格</h2>
              <div className='xo-margin-left-xs'>
                <p>
                  轻量级表格，支持拉伸，排序
                </p>
              </div>
              <Tabs>
                <Tabs.TabPane text='效果'>
                  <div className='xo-padding-xs' style={{width: '100%', height: 200}}>
                    <Table
                      ref={(table1) => this.table1 = table1}
                      columns={
                        [
                          {title: '序列', type: 'indexColumn'},
                          {title: '勾选', type: 'checkboxColumn'},
                          {title: '字段一', field: 'field1', width: 100},
                          {title: '字段二', field: 'field2', width: 200, sortOrder: 'desc'},
                          {title: '字段三', field: 'field3', width: 300, sortOrder: 'asc'},
                          {title: '字段四', field: 'field4', width: 400, sortOrder: 'desc'},
                          {title: '字段五', field: 'field5', width: 500}
                        ]
                      }
                      data={
                        [
                          { field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', field2: 'aaa', field3: '一一一', field4: 111 },
                          { field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', field2: 'bbb', field3: '二二二', field4: 222 },
                          { field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', field2: 'ccc', field3: '三三三', field4: 333 },
                          { field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', field2: 'ddd', field3: '四四四', field4: 444 },
                          { field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', field2: 'eee', field3: '五五五', field4: 555 }
                        ]
                      }
                      config={
                        {
                          onCellClick: (e, sender) => { console.log(e.target); console.log(sender); },
                          onRowClick: (e, sender) => { console.log(e); console.log(sender); },
                          multiSelect: true
                        }
                      }/>
                  </div>
                  <p>
                    <Button className='xo-margin-right-xs' onClick={() => { console.log(this.table1.getData()) }}>getData</Button>
                    <Button
                      className='xo-margin-right-xs'
                      onClick={() => {
                        this.table1.setData([
                          {field1: '111', field2: 'aaa', field3: '一一一', field4: '...'},
                          {field1: '222', field2: 'bbb', field3: '二二二', field4: '...'},
                          {field1: '333', field2: 'ccc', field3: '三三三', field4: '...'},
                          {field1: '444', field2: 'ddd', field3: '四四四', field4: '...'},
                          {field1: '555', field2: 'eee', field3: '五五五', field4: '...'}
                        ])
                      }}>setData</Button>
                    <Button className='xo-margin-right-xs' onClick={() => { console.log(this.table1.hide()) }}>hide</Button>
                    <Button className='xo-margin-right-xs' onClick={() => { console.log(this.table1.show()) }}>show</Button>
                  </p>
                </Tabs.TabPane>
                <Tabs.TabPane text='代码'>
                  <Code>
                    {
                      `<Table\n` +
                        `\tcolumns=\{\n` +
                          `\t\t[\n` +
                            `\t\t\t\{title: '序列', type: 'indexColumn'\},\n` +
                            `\t\t\t\{title: '勾选', type: 'checkboxColumn'\},\n` +
                            `\t\t\t\{title: '字段一', field: 'field1', width: 100\},\n` +
                            `\t\t\t\{title: '字段二', field: 'field2', width: 200, sortOrder: 'desc'\},\n` +
                            `\t\t\t\{title: '字段三', field: 'field3', width: 300, sortOrder: 'asc'\},\n` +
                            `\t\t\t\{title: '字段四', field: 'field4', width: 400, sortOrder: 'desc'\},\n` +
                            `\t\t\t\{title: '字段五', field: 'field5', width: 500\}\n` +
                          `\t\t]\n` +
                        `\t}\n` +
                        `\tdata=\{\n` +
                          `\t\t[\n` +
                            `\t\t\t\{ field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', \n` +
                            `\t\t\t\t\tfield2: 'aaa', field3: '一一一', field4: 111 \},\n` +
                            `\t\t\t\{ field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', \n` +
                            `\t\t\t\t\tfield2: 'bbb', field3: '二二二', field4: 222 \},\n` +
                            `\t\t\t\{ field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', \n` +
                            `\t\t\t\t\tfield2: 'ccc', field3: '三三三', field4: 333 \},\n` +
                            `\t\t\t\{ field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', \n` +
                            `\t\t\t\t\tfield2: 'ddd', field3: '四四四', field4: 444 \},\n` +
                            `\t\t\t\{ field1: '很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容', \n` +
                            `\t\t\t\t\tfield2: 'eee', field3: '五五五', field4: 555 \}\n` +
                          `\t\t]\n` +
                        `\t}\n` +
                        `\tconfig=\{\n` +
                          `\t\t\{\n` +
                            `\t\t\tonCellClick: (e, sender) => { console.log(e.target); console.log(sender); },\n` +
                            `\t\t\tonRowClick: (e, sender) => { console.log(e); console.log(sender); },\n` +
                            `\t\t\tmultiSelect: true\n` +
                          `\t\t\}\n` +
                        `\t\}/>`
                    }
                  </Code>
                </Tabs.TabPane>
              </Tabs>
              <h2>API</h2>
              <p>prop</p>

              <Table
                columns={
                  [
                    { title: 'name', field: 'name', width: 100 },
                    { title: 'type', field: 'type', width: 100 },
                    { title: 'default', field: 'default'},
                    { title: 'desc', field: 'desc' }
                  ]
                }
                data={
                  [
                    {
                      name: 'columns', type: 'array', desc: `列配置\n` +
                                                            'field<string>: 列对应data要显示的属性名称, （必须提供）\n' +
                                                            `title<string>: '列显示的字段名称', （必须提供）\n` +
                                                            `width<number>: 列宽, （一般有限制的提供对应的宽度即可，其他的默认自适应auto）\n` +
                                                            `type<string>: 类型,（默认string）, indexColumn, checkboxColumn\n` +
                                                            `sortOrder<string>: 排序方向, （默认null）, asc<正序>, desc<倒序>\n` +
                                                            `allowResize<bool>: 允许支持拉伸, （默认true）\n` +
                                                            `className<string>: 其他的class标识,作用于th\n` +
                                                            `render<function>: 返回对应渲染th内容 => function(indexData) {}`
                    },
                    {
                      name: 'data', type: 'array', desc: `数据源`
                    },
                    {
                      name: 'config', type: 'object', desc: `其他配置\n` +
                                                            'width<string/number>: 默认<auto>\n' +
                                                            `height<string/number>: 默认<auto>\n` +
                                                            `multiSelect<bool>: 是否支持选, （默认false）， true\n` +
                                                            `onCellRender<function>: 用于td渲染前的操作 => function(sender) { return sender.value }\n` +
                                                            `sortOrder<string>: 排序方向, （默认null）, asc<正序>, desc<倒序>\n` +
                                                            `onRowClick<function>: 行点击 => function(e, sender) {}\n` +
                                                            `className<string>: 其他的class标识,作用于th\n` +
                                                            `onCellClick<function>: 表格点击 => function(e, sender) {}`
                    }
                  ]
                }
                config={
                  {
                    onCellRender: cellRender
                  }
                }/>

              <p>method</p>
              <Table
                columns={methodColumns}
                data={
                  [
                    {name: 'hide( )', desc: '隐藏'},
                    {name: 'show( )', desc: '显示'},
                    {name: 'refesh( )', desc: '刷新'},
                    {name: 'windowResize( )', desc: '重新设置窗口尺寸'},
                    {name: 'setData( data )', param: 'data<array>', desc: '设置数据源并更新tbody'},
                    {name: 'getData( )', desc: '获取数据源', return: 'array'}
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
  {title: 'return', field: 'return', width: 100}
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
