import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table } from '../components'

export default class TableAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'table',
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
              <div style={{width: '100%', height: 200}}>
                <Table
                  columns={
                    [
                      {title: '字段一', field: 'field1', width: 100},
                      {title: '字段二', field: 'field2', width: 200},
                      {title: '字段三', field: 'field3', width: 300},
                      {title: '字段四', field: 'field4', width: 400},
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
                  }/>
                </div>
            </div>
          )
        }
      }
    ]
  }

}
