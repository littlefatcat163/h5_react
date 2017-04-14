import React from 'react'

import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table, Icon, xoSystem, Select } from '../components'

export default class SelectAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'select',
          list: [
            { 'data-target': 'select', name: '下拉框' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'select',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <div className='xo-layout'>
                        <div className='xo-col-xs-2' style={{height: 500}}>
                          <Select ref={(select) => this.select = select} valueChanged={(select) => console.log('...')}>
                            <Select.OptionGroup name='one'>
                              <Select.Option value='1'>1</Select.Option>
                              <Select.Option value='2'>2</Select.Option>
                              <Select.Option value='1'>1</Select.Option>
                            </Select.OptionGroup>
                          </Select>
                          <p>通过console面板查看</p>
                        </div>
                        <div className='xo-col-xs-10'>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.hide()}>hide</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.show()}>show</Button></div>
                          <div className='xo-margin-bottom-xs'>
                            <Button onClick={
                              () => {
                                let data = [
                                  { name: 'one', value: 'one' },
                                  { name: '组一', children: [{ name: 'first', value: '1' }, { name: 'second', value: '2' }] },
                                  { name: 'three', value: 'three' }
                                ];
                                this.select.setData(data);
                              }
                              }>
                              setData
                            </Button>
                          </div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getData())}>getData</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setSelected(1)}>setSelected ( 1 )</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setSelected({ name: 'second', value: '2' })}>setSelected ( obj )</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getSelected())}>getSelected</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setValue('one')}>setValue</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getValue())}>getValue</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.disable()}>disable</Button></div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.enable()}>enable</Button></div>
                          <div className='xo-margin-bottom-xs'>
                            <Button onClick={() => {
                                this.select.setConfig({ valueChanged: null, allowInput: true, valueField: 'field2', textField: 'field1' });
                                let data = [
                                  { field1: '广州', field2: 'GZ', field3: 'guangzhou' },
                                  { field1: '深圳', field2: 'SZ', field3: 'shenzhen' },
                                  { field1: '上海', field2: 'SH', field3: 'shanghai' },
                                  { field1: '北京', field2: 'BJ', field3: 'beijing' }
                                ];
                                this.select.setData(data);
                              }}>
                              setConfig
                            </Button>
                          </div>
                          <div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setStyle({ width: 200 })}>setStyle</Button></div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-padding-xs'>\n` +
                          `\t<div className='xo-layout'>\n` +
                            `\t\t<div className='xo-col-xs-2'>\n` +
                              `\t\t\t<Select ref={(select) => this.select = select} valueChanged={(select) => console.log('...')}>\n` +
                                `\t\t\t\t<Select.OptionGroup name='one'>\n` +
                                  `\t\t\t\t\t<Select.Option value='1'>1</Select.Option>\n` +
                                  `\t\t\t\t\t<Select.Option value='2'>2</Select.Option>\n` +
                                  `\t\t\t\t\t<Select.Option value='1'>1</Select.Option>\n` +
                                `\t\t\t\t</Select.OptionGroup>\n` +
                              `\t\t\t</Select>\n` +
                              `\t\t\t<p>通过console面板查看</p>\n` +
                            `\t\t</div>\n` +
                            `\t\t<div className='xo-col-xs-10'>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.hide()}>hide</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.show()}>show</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'>\n` +
                                `\t\t\t\t<Button onClick={\n` +
                                  `\t\t\t\t\t() => {\n` +
                                    `\t\t\t\t\t\tlet data = [\n` +
                                      `\t\t\t\t\t\t\t{ name: 'one', value: 'one' },\n` +
                                      `\t\t\t\t\t\t\t{ name: '组一', children: [{ name: 'first', value: '1' }, { name: 'second', value: '2' }] },\n` +
                                      `\t\t\t\t\t\t\t{ name: 'three', value: 'three' }\n` +
                                    `\t\t\t\t\t\t];\n` +
                                    `\t\t\t\t\tthis.select.setData(data);\n` +
                                  `\t\t\t\t\t}\n` +
                                  `\t\t\t\t}>\n` +
                                  `\t\t\t\t\tsetData\n` +
                                `\t\t\t\t</Button>\n` +
                              `\t\t\t</div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getData())}>getData</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setSelected(1)}>setSelected ( 1 )</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setSelected({ name: 'second', value: '2' })}>setSelected ( obj )</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getSelected())}>getSelected</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setValue('one')}>setValue</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => console.log(this.select.getValue())}>getValue</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.disable()}>disable</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.enable()}>enable</Button></div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'>\n` +
                                `\t\t\t\t<Button onClick={() => {\n` +
                                    `\t\t\t\t\tthis.select.setConfig({ valueChanged: null, allowInput: true, valueField: 'field2', textField: 'field1' });\n` +
                                    `\t\t\t\t\tlet data = [\n` +
                                      `\t\t\t\t\t\t{ field1: '广州', field2: 'GZ', field3: 'guangzhou' },\n` +
                                      `\t\t\t\t\t\t{ field1: '深圳', field2: 'SZ', field3: 'shenzhen' },\n` +
                                      `\t\t\t\t\t\t{ field1: '上海', field2: 'SH', field3: 'shanghai' },\n` +
                                      `\t\t\t\t\t\t{ field1: '北京', field2: 'BJ', field3: 'beijing' }\n` +
                                    `\t\t\t\t\t];\n` +
                                    `\t\t\t\t\tthis.select.setData(data);\n` +
                                  `\t\t\t\t\t}}>\n` +
                                  `\t\t\t\t\tsetConfig\n` +
                                `\t\t\t\t</Button>\n` +
                              `\t\t\t</div>\n` +
                              `\t\t\t<div className='xo-margin-bottom-xs'><Button onClick={() => this.select.setStyle({ width: 200 })}>setStyle</Button></div>\n` +
                            `\t\t</div>\n` +
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
                      {name: 'data', type: 'array', desc: '对象字段与valueField, textField相关'},
                      {name: 'valueField', type: 'string', default: 'value', desc: '值字段名, data中的对象需要有value属性'},
                      {name: 'textField', type: 'string', default: 'name', desc: '显示字段名，默认, data中的对象需要有name属性'},
                      {name: 'allowInput', type: 'bool', default: 'false', desc: '允许输入'},
                      {name: 'disabled', type: 'string', default: 'false', desc: '禁用'},
                      {name: 'valueChanged', type: 'func', desc: '下拉框选取值变化的时候相应事件 (select) => console.log(select.getValue())'}
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
                        { name: 'setData( data )', param: 'data<array>', desc: '设置数据并更新下拉框' },
                        { name: 'getData( )', desc: '获取数据', return: 'array' },
                        { name: 'setValue( value )', param: 'value<string/number>', desc: '设置值，需要设置对应valueField的值，更新选中值' },
                        { name: 'getValue( )', return: 'string/number', desc: '获取选中对应valueField的值' },
                        { name: 'setSelected( obj )', param: 'obj<number/object>', desc: '设置选中的值' },
                        { name: 'getSelected( )', return: 'object', desc: '获取选中的数据' },
                        { name: 'setConfig( config )', param: 'config<object>\n{\n valueChanged<func>, \n disabled<bool>, \n allowInput<bool>, \n valueField<string>, \n textField<string>}', desc: '设置prop,\n注意：若修改textField与valueField，请再该方法后面重新使用setData设置数据并更新下拉框' },
                        { name: 'setStyle( style )', param: 'style<cssObject>' }
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
