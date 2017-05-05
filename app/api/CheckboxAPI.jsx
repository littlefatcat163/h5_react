import React from 'react'

import BaseComponent from './BaseComponent'
import { Tabs, Code, Table, Checkbox, Radio, xoSystem } from '../components'

export default class CheckboxAPI extends BaseComponent {

  getLeftDOMList() {
    return [
      {
        name: 'Checkbox',
        list: [
          { 'data-target': 'checkbox', name: '勾选框' },
          { 'data-target': 'radio', name: '单选框' }
        ]
      }
    ]
  }

  getRightDOMList() {
    return [
      {
        'data-toggle': 'checkbox',
        render: () => {
          return (
            <div className='xo-col-xs-12'>
              <h2>勾选框</h2>
              <Tabs>
                <Tabs.TabPane text='效果'>
                  <div className='xo-margin-left-xs'>
                    <p><Checkbox onClick={(checkbox) => console.log(checkbox.getValue())} checked={true}>default-xs</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.SM} type={Checkbox.TYPE.PRIMARY}>primary-sm</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.INFO}>info-md</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.LG} type={Checkbox.TYPE.SUCCESS}>success-lg</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.WARN}>warn-xl</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.LG} type={Checkbox.TYPE.DANGER}>danger-lg</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.INFO} disabled={true}>info-md-disabled</Checkbox></p>
                    <p><Checkbox size={Checkbox.SIZE.SM} type={Checkbox.TYPE.PRIMARY} disabled={true}>primary-sm-disabled</Checkbox></p>
                    <p><Checkbox onCheckedChanged={(checkbox) => console.log(checkbox.getValue())} format={Checkbox.FORMAT.ONE}>format-1</Checkbox></p>
                    <p><Checkbox disabled={true} format={Checkbox.FORMAT.ONE}>format-1-disabled</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.PRIMARY} format={Checkbox.FORMAT.ONE}>format-1-lg-primary</Checkbox></p>
                    <p><Checkbox checked={true} type={Checkbox.TYPE.SUCCESS} disabled={true} format={Checkbox.FORMAT.ONE}>format-1-success-disabled</Checkbox></p>
                    <p><Checkbox checked={true} format={Checkbox.FORMAT.TWO}>format-2</Checkbox></p>
                    <p><Checkbox size={Checkbox.SIZE.LG} format={Checkbox.FORMAT.TWO} disabled={true}>format-2-disabled</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.PRIMARY} format={Checkbox.FORMAT.TWO} disabled={true}>format-2-primary-disabled</Checkbox></p>
                    <p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.WARN} format={Checkbox.FORMAT.TWO}>format-2-warn</Checkbox></p>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane text='代码'>
                  <Code>
                    {
                      `<p><Checkbox checked={true}>default-xs</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.SM} type={Checkbox.TYPE.PRIMARY}>primary-sm</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.INFO}>info-md</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.LG} type={Checkbox.TYPE.SUCCESS}>success-lg</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.WARN}>warn-xl</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.LG} type={Checkbox.TYPE.DANGER}>danger-lg</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.INFO} disabled={true}>info-md</Checkbox></p>\n` +
                      `<p><Checkbox size={Checkbox.SIZE.SM} type={Checkbox.TYPE.PRIMARY} disabled={true}>primary-sm</Checkbox></p>\n` +
                      `<p><Checkbox format={Checkbox.FORMAT.ONE}>format-1</Checkbox></p>\n` +
                      `<p><Checkbox disabled={true} format={Checkbox.FORMAT.ONE}>format-1-disabled</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.PRIMARY} format={Checkbox.FORMAT.ONE}>format-1-lg-primary</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} type={Checkbox.TYPE.SUCCESS} disabled={true} format={Checkbox.FORMAT.ONE}>format-1-success-disabled</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} format={Checkbox.FORMAT.TWO}>format-2</Checkbox></p>\n` +
                      `<p><Checkbox size={Checkbox.SIZE.LG} format={Checkbox.FORMAT.TWO} disabled={true}>format-2-disabled</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.MD} type={Checkbox.TYPE.PRIMARY} format={Checkbox.FORMAT.TWO} disabled={true}>format-2-primary-disabled</Checkbox></p>\n` +
                      `<p><Checkbox checked={true} size={Checkbox.SIZE.XL} type={Checkbox.TYPE.WARN} format={Checkbox.FORMAT.TWO}>format-2-warn</Checkbox></p>`
                    }
                  </Code>
                </Tabs.TabPane>
              </Tabs>
              <h2>API</h2>
              <p>prop</p>
              <Table
                columns={
                  [
                    { title: 'name', field: 'name', width: 150 },
                    { title: 'type', field: 'type', width: 100 },
                    { title: 'default', field: 'default'},
                    { title: 'desc', field: 'desc' }
                  ]
                }
                data={
                  [
                    { name: 'size', type: 'enum', default: 'Checkbox.SIZE.XS', desc: '勾选框大小\nCheckbox.SIZE.XS\nCheckbox.SIZE.SM\nCheckbox.SIZE.MD\nCheckbox.SIZE.LG\nCheckbox.SIZE.XL' },
                    { name: 'type', type: 'enum', default: 'Checkbox.TYPE.DEFAULT', desc: '勾选框类型\nCheckbox.TYPE.DEFAULT\nCheckbox.TYPE.PRIMARY\nCheckbox.TYPE.INFO\nCheckbox.TYPE.WARN\nCheckbox.TYPE.SUCCESS\nCheckbox.TYPE.DANGER' },
                    { name: 'format', type: 'enum', default: 'Checkbox.FORMAT.DEFAULT', desc: '勾选框格式\nCheckbox.FORMAT.DEFAULT\nCheckbox.FORMAT.ONE\nCheckbox.FORMAT.TWO' },
                    { name: 'disabled', type: 'bool', default: 'false', desc: '禁用,（绑定的事件不起作用）' },
                    { name: 'onClick', type: 'func', desc: '点击事件' },
                    { name: 'onCheckedChanged', type: 'func', desc: '勾选变换事件' }
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
                      { name: 'onClick( checkbox )', param: 'checkbox<object>', desc: '点击事件' },
                      { name: 'onCheckedChanged( checkbox )', param: 'checkbox<object>', desc: '勾选变化事件' },
                      { name: 'setValue( checked )', param: 'checked<bool>', desc: '设置勾选' },
                      { name: 'getValue( )', param: 'checked<bool>', desc: '获取勾选值', return: 'bool' },
                      { name: 'enable( )', desc: '启用' },
                      { name: 'disable( )', desc: '禁用' },
                      { name: 'hide( )', desc: '隐藏' },
                      { name: 'show( )', desc: '显示' }
                    ]
                  }
                  config={
                    {
                      onCellRender: methodCellRender
                    }
                  }/>
            </div>
          )
        }
      },
      {
        'data-toggle': 'radio',
        render: () => {
          return (
            <div className='xo-padding-xs'>
              <h2>单选框</h2>
              <Tabs>
                <Tabs.TabPane text='效果'>
                  <div className='xo-padding-xs'>
                    <Radio name='radio' />
                    <Radio name='radio' disabled={true} checked={true} size={Radio.SIZE.SM} type={Radio.TYPE.PRIMARY} />
                    <Radio name='radio' disabled={true} size={Radio.SIZE.MD} type={Radio.TYPE.INFO} />
                    <Radio name='radio' size={Radio.SIZE.LG} type={Radio.TYPE.SUCCESS} format={Radio.FORMAT.ONE} />
                    <Radio name='radio' size={Radio.SIZE.XL} type={Radio.TYPE.WARN} format={Radio.FORMAT.TWO} />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane text='代码'>
                  <Code>
                    {
                      `<Radio name='radio' />\n` +
                      `<Radio name='radio' disabled={true} checked={true} size={Radio.SIZE.SM} type={Radio.TYPE.PRIMARY} />\n` +
                      `<Radio name='radio' disabled={true} size={Radio.SIZE.MD} type={Radio.TYPE.INFO} />\n` +
                      `<Radio name='radio' size={Radio.SIZE.LG} type={Radio.TYPE.SUCCESS} format={Radio.FORMAT.ONE} />\n` +
                      `<Radio name='radio' size={Radio.SIZE.XL} type={Radio.TYPE.WARN} format={Radio.FORMAT.TWO} />`
                    }
                  </Code>
                </Tabs.TabPane>
              </Tabs>
              <h2>API</h2>
              <p>prop</p>
              <Table
                columns={
                  [
                    { title: 'name', field: 'name', width: 150 },
                    { title: 'type', field: 'type', width: 100 },
                    { title: 'default', field: 'default'},
                    { title: 'desc', field: 'desc' }
                  ]
                }
                data={
                  [
                    { name: 'size', type: 'enum', default: 'Checkbox.SIZE.XS', desc: '单选框大小\nCheckbox.SIZE.XS\nCheckbox.SIZE.SM\nCheckbox.SIZE.MD\nCheckbox.SIZE.LG\nCheckbox.SIZE.XL' },
                    { name: 'type', type: 'enum', default: 'Checkbox.TYPE.DEFAULT', desc: '单选框类型\nCheckbox.TYPE.DEFAULT\nCheckbox.TYPE.PRIMARY\nCheckbox.TYPE.INFO\nCheckbox.TYPE.WARN\nCheckbox.TYPE.SUCCESS\nCheckbox.TYPE.DANGER' },
                    { name: 'format', type: 'enum', default: 'Checkbox.FORMAT.DEFAULT', desc: '勾选框格式\nCheckbox.FORMAT.DEFAULT\nCheckbox.FORMAT.ONE\nCheckbox.FORMAT.TWO' },
                    { name: 'disabled', type: 'bool', default: 'false', desc: '禁用,（绑定的事件不起作用）' },
                    { name: 'onClick', type: 'func', desc: '点击事件' },
                    { name: 'onCheckedChanged', type: 'func', desc: '勾选变换事件' }
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
                      { name: 'onClick( checkbox )', param: 'checkbox<object>', desc: '点击事件' },
                      { name: 'onCheckedChanged( checkbox )', param: 'checkbox<object>', desc: '勾选变化事件' },
                      { name: 'setValue( checked )', param: 'checked<bool>', desc: '设置勾选' },
                      { name: 'getValue( )', param: 'checked<bool>', desc: '获取勾选值', return: 'bool' },
                      { name: 'enable( )', desc: '启用' },
                      { name: 'disable( )', desc: '禁用' },
                      { name: 'hide( )', desc: '隐藏' },
                      { name: 'show( )', desc: '显示' }
                    ]
                  }
                  config={
                    {
                      onCellRender: methodCellRender
                    }
                  }/>
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
