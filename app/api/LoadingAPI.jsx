import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, Loading } from '../components'

export default class LoadingAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'loading',
          list: [
            {
              'data-target': 'loading',
              'name': '加载框'
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
          'data-toggle': 'loading',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>加载框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs xo-layout'>
                      <div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>
                        <Loading />
                      </div>
                      <div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>
                        <Loading type={Loading.TYPE.ONE}/>
                      </div>
                      <div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>
                        <Loading type={Loading.TYPE.TWO}/>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-padding-xs xo-layout'>\n` +
                          `\t<div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>\n` +
                            `\t\t<Loading />\n` +
                          `\t</div>\n` +
                          `\t<div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>\n` +
                            `\t\t<Loading type={Loading.TYPE.ONE}/>\n` +
                          `\t</div>\n` +
                          `\t<div className='xo-col-xs-4' style={{height: 200, width: 200, position: 'relative'}}>\n` +
                            `\t\t<Loading type={Loading.TYPE.TWO}/>\n` +
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
                      {name: 'size', type: 'number', desc: '尺寸'},
                      {name: 'type', type: 'enum', desc: 'Loading.TYPE'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
                  <p>
                    <i className='xo-margin-right-xs'>注意:</i>
                    外部容器需要定位为relative, fixed, absolute
                  </p>
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
