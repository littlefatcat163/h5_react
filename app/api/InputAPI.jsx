import React from 'react'

import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table, Icon, xoSystem, Input, Select } from '../components'

export default class InputAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'input',
          list: [
            { 'data-target': 'input', name: '输入框' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'input',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>输入框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Input />
                    </div>
                    <div className='xo-padding-xs'>
                      <Input.InputGroup>
                        <Input addonBefore={<Icon className='search'/>} addonAfter={<Icon className='eercast'/>}/>
                        <Input addonBefore={`前缀`} addonAfter={`后缀`}/>
                        <Input />
                        <Input addonBefore={`前缀`} addonAfter={`后缀`}/>
                      </Input.InputGroup>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>

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
