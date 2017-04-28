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
                      <Input ref={(refInput) => this.refInput = refInput} className='xo-margin-right-xs' placeholder='只允许输入数组和英文字符' allowInputType={[Input.ALLOW_INPUT_TYPE.NUMBER, Input.ALLOW_INPUT_TYPE.ENGLISH]}/>
                    </div>
                    <div className='xo-padding-xs'>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.setValue('123中char')}>setValue</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.disable()}>disable</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.enable()}>enable</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.hide()}>hide</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.show()}>show</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.focus()}>focus</Button>
                      <Button className='xo-margin-right-xs' onClick={() => this.refInput.blur()}>blur</Button>
                    </div>
                    <div className='xo-padding-xs'>
                      <Input.InputGroup>
                        <Input addonBefore={<Icon className='search'/>} addonAfter={<Icon className='eercast'/>}/>
                        <Input addonBefore={`前缀`} addonAfter={`后缀`}/>
                        <Input />
                        <Input addonBefore={'前缀'} addonAfter={`后缀`}/>
                      </Input.InputGroup>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-padding-xs'>\n` +
                          `\t<Input ref={(refInput) => this.refInput = refInput} className='xo-margin-right-xs' placeholder='只允许输入数组和英文字符' allowInputType={[Input.ALLOW_INPUT_TYPE.NUMBER, Input.ALLOW_INPUT_TYPE.ENGLISH]}/>\n` +
                        `</div>\n` +
                        `<div className='xo-padding-xs'>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.setValue('123中char')}>setValue</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.disable()}>disable</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.enable()}>enable</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.hide()}>hide</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.show()}>show</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.focus()}>focus</Button>\n` +
                          `\t<Button className='xo-margin-right-xs' onClick={() => this.refInput.blur()}>blur</Button>\n` +
                        `</div>\n` +
                        `<div className='xo-padding-xs'>\n` +
                          `\t<Input.InputGroup>\n` +
                            `\t\t<Input addonBefore={<Icon className='search'/>} addonAfter={<Icon className='eercast'/>}/>\n` +
                            `\t\t<Input addonBefore={'前缀'} addonAfter={'后缀'}/>\n` +
                            `\t\t<Input />\n` +
                            `\t\t<Input addonBefore={'前缀'} addonAfter={'后缀'}/>\n` +
                          `\t</Input.InputGroup>\n` +
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
                      {title: 'type', field: 'type', width: 200},
                      {title: 'default', field: 'default', width: 250},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'disabled', type: 'string', default: 'false', desc: '禁用'},
                      {name: 'value', type: 'string/number', desc: '值'},
                      {name: 'maxLength', type: 'number', default: '9999', desc: '输入内容的长度上限'},
                      {name: 'allowInputType', type: 'array<enum>', default: 'Input.ALLOW_INPUT_TYPE.ALL', desc: '允许输入的类型\nInput.ALLOW_INPUT_TYPE.ALL //所有,\nInput.ALLOW_INPUT_TYPE.NUMBER //数字,\nInput.ALLOW_INPUT_TYPE.ENGLISH //英文,\nInput.ALLOW_INPUT_TYPE.CHINESE //中文,\nInput.ALLOW_INPUT_TYPE.REGEX //正则表达式\n 可以组合使用，有使用正则表达式时只支持正则表达式'},
                      {name: 'placeholder', type: 'string', desc: '输入框空的时候显示的内容'},
                      {name: 'onFocus', type: 'func', desc: '(input, e) => { ... } //获取焦点'},
                      {name: 'onBlur', type: 'func', desc: '(input, e) => { ... } //失去焦点'},
                      {name: 'onKeyDown', type: 'func', desc: '(input, e) => { ... } '},
                      {name: 'onKeyPress', type: 'func', desc: '(input, e) => { ... } //键盘按'},
                      {name: 'onKeyUp', type: 'func', desc: '(input, e) => { ... } '},
                      {name: 'onChange', type: 'func', desc: '(input, e) => { ... } //值改变'},
                      {name: 'onCopy', type: 'func', desc: '(input, e) => { ... } //复制'},
                      {name: 'onCut', type: 'func', desc: '(input, e) => { ... } //剪切'},
                      {name: 'onPaste', type: 'func', desc: '(input, e) => { ... } //拷贝'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
                  <p>method</p>
                  <Table
                    columns={methodColumns}
                    data={
                      [
                        { name: 'hide( )', desc: '隐藏' },
                        { name: 'show( )', desc: '显示' },
                        { name: 'enable( )', desc: '启用' },
                        { name: 'disable( )', desc: '禁用' },
                        { name: 'setValue( value )', param: 'value<string/number>', desc: '设置内容' },
                        { name: 'getValue( )', desc: '获取内容', return: 'string' },
                        { name: 'setConfig( config )', param: 'config<object>\n{\n maxLength<number>, \n allowInputType<enum>, \n placeholder<string>, \n onFocus<func>, \n onBlur<func>, \n onKeyDown<func>, \n onKeyPress<func>, \n onKeyUp<func>, \n onChange<func>, \n onCopy<func>, \n onCut<func>, \n onPaste<func>}' },
                        { name: 'focus( )', desc: '获取焦点' },
                        { name: 'blur( )', desc: '失去焦点' }
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
