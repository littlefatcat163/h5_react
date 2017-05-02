import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Timeline, Icon, xoSystem } from '../components'

export default class TimelineAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'timeline',
          list: [
            {
              'data-target': 'timeline',
              'name': '时间轴'
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
          'data-toggle': 'timeline',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>加载框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs xo-layout'>
                      <div className='xo-border-gray' style={{width: 300, height: 300}}>
                        <Timeline>
                          <Timeline.Item>
                            <p>create in 2017.04.01 09:00:00</p>
                          </Timeline.Item>
                          <Timeline.Item icon={<Icon className='clock-o' type={Icon.TYPE.DANGER}/>}>
                            <h4>create in 2017.04.02 09:00:00</h4>
                            <label>create in 2017.04.03 09:00:00</label>
                          </Timeline.Item>
                          <Timeline.Item icon={<Icon className='comments-o' type={Icon.TYPE.SUCCESS}/>}>
                            <div>communicate with 2017.05.02 18:18:18</div>
                          </Timeline.Item>
                        </Timeline>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-border-gray' style={{width: 300, height: 300}}>\n` +
                          `\t<Timeline>\n` +
                            `\t\t<Timeline.Item>\n` +
                              `\t\t\t<p>create in 2017.04.01 09:00:00</p>\n` +
                            `\t\t</Timeline.Item>\n` +
                            `\t\t<Timeline.Item icon={<Icon className='clock-o' type={Icon.TYPE.DANGER}/>}>\n` +
                              `\t\t\t<h4>create in 2017.04.02 09:00:00</h4>\n` +
                              `\t\t\t<label>create in 2017.04.03 09:00:00</label>\n` +
                            `\t\t</Timeline.Item>\n` +
                            `\t\t<Timeline.Item icon={<Icon className='comments-o' type={Icon.TYPE.SUCCESS}/>}>\n` +
                              `\t\t\t<div>communicate with 2017.05.02 18:18:18</div>\n` +
                            `\t\t</Timeline.Item>\n` +
                          `\t</Timeline>\n` +
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
                      {title: 'default', field: 'default', width: 240},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'icon', type: 'Icon', default: `<Icon className='circle-o'/>`, desc: '图标'}
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
