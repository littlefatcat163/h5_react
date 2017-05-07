import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, Pager } from '../components'

export default class CarouselAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'Pager',
          list: [
            {
              'data-target': 'pager',
              'name': '分页'
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
          'data-toggle': 'pager',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>分页</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-margin-bottom-xs'>
                      <Pager total={200} onChange={(page) => console.log(page)}/>
                    </div>
                    <div>
                      <Pager total={100} gap={30} allowJump={false} current={5}/>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-margin-bottom-xs'>\n` +
                          `\t<Pager total={200} onChange={(page) => console.log(page)}/>\n` +
                        `</div>\n` +
                        `<div>\n` +
                          `\t<Pager total={100} gap={30} allowJump={false} current={5}/>\n` +
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
                      { title: 'name', field: 'name', width: 100 },
                      { title: 'type', field: 'type', width: 100 },
                      { title: 'default', field: 'default'},
                      { title: 'desc', field: 'desc' }
                    ]
                  }
                  data={
                    [
                      {
                        name: 'total', type: 'number', desc: `需要分页分配的总数`
                      },
                      {
                        name: 'gap', type: 'number', desc: `分页间隔，决定分页数 = total / gap`, default: '10'
                      },
                      {
                        name: 'current', type: 'number', desc: `当前页`, default: '1'
                      },
                      {
                        name: 'allowJump', type: 'bool', desc: `允许跳转，go input输入框`, default: 'true'
                      },
                      {
                        name: 'onChange', type: 'func', desc: `当前页变换后回调 (page) => { ... }`
                      }
                    ]
                  }
                  config={
                    {
                      onCellRender: cellRender
                    }
                  }/>
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
