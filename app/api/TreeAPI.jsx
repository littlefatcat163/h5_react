import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, Tree, Icon } from '../components'

export default class TreeAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'Tree',
          list: [
            { 'data-target': 'tree', name: '树' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'tree',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>模态框、提示框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div style={{width: 300, marginRight: 50, display: 'inline-block', verticalAlign: 'top'}}>
                      <p>允许勾选</p>
                      <Tree disabledCheckbox={false}>
                        <Tree.TreeNode title='0' key='0'></Tree.TreeNode>
                        <Tree.TreeNode defaultExtend={true} disabled={true} title='1' key='1'>
                          <Tree.TreeNode title='1-0' key='1-0'></Tree.TreeNode>
                        </Tree.TreeNode>
                        <Tree.TreeNode defaultExtend={true} title='2' key='2'>
                          <Tree.TreeNode title='2-0' key='2-0'></Tree.TreeNode>
                          <Tree.TreeNode defaultExtend={true} defaultChecked={true} title='2-1' key='2-1'>
                            <Tree.TreeNode title='2-1-0' key='2-1-0'></Tree.TreeNode>
                            <Tree.TreeNode title='2-1-1' key='2-1-1'></Tree.TreeNode>
                            <Tree.TreeNode title='2-1-2' key='2-1-2'></Tree.TreeNode>
                          </Tree.TreeNode>
                          <Tree.TreeNode title='2-2' key='2-2'></Tree.TreeNode>
                        </Tree.TreeNode>
                      </Tree>
                    </div>

                    <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                      <p>允许拖拽</p>
                      <Tree disabledDrag={false} addon={<Icon className='file-text-o'/>} addonOpen={<Icon className='caret-right'/>} addonClose={<Icon className='caret-down'/>}>
                        <Tree.TreeNode title='0' key='0'></Tree.TreeNode>
                        <Tree.TreeNode defaultExtend={true} disabled={true} title='1' key='1'>
                          <Tree.TreeNode title='1-0' key='1-0'></Tree.TreeNode>
                        </Tree.TreeNode>
                        <Tree.TreeNode defaultExtend={true} title='2' key='2'>
                          <Tree.TreeNode title='2-0' key='2-0'></Tree.TreeNode>
                          <Tree.TreeNode defaultChecked={true} title='2-1' key='2-1'>
                            <Tree.TreeNode title='2-1-0' key='2-1-0'></Tree.TreeNode>
                            <Tree.TreeNode title='2-1-1' key='2-1-1'></Tree.TreeNode>
                            <Tree.TreeNode title='2-1-2' key='2-1-2'></Tree.TreeNode>
                          </Tree.TreeNode>
                          <Tree.TreeNode title='2-2' key='2-2'></Tree.TreeNode>
                        </Tree.TreeNode>
                        <Tree.TreeNode defaultChecked={true} title='3' key='3'>
                          <Tree.TreeNode title='3-0' key='3-0'></Tree.TreeNode>
                          <Tree.TreeNode title='3-1' key='3-1'>
                            <Tree.TreeNode title='3-1-0' key='3-1-0'></Tree.TreeNode>
                            <Tree.TreeNode title='3-1-1' key='3-1-1'></Tree.TreeNode>
                          </Tree.TreeNode>
                          <Tree.TreeNode title='3-2' key='3-2'>
                            <Tree.TreeNode title='3-2-0' key='3-2-0'></Tree.TreeNode>
                            <Tree.TreeNode title='3-2-1' key='3-2-1'></Tree.TreeNode>
                          </Tree.TreeNode>
                        </Tree.TreeNode>
                      </Tree>
                    </div>

                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div style={{width: 300, marginRight: 50, display: 'inline-block'}}>\n` +
                          `\t<p>允许勾选</p>\n` +
                          `\t<Tree disabledCheckbox={false}>\n` +
                            `\t\t<Tree.TreeNode title='0' key='0'></Tree.TreeNode>\n` +
                            `\t\t<Tree.TreeNode defaultExtend={true} disabled={true} title='1' key='1'>\n` +
                              `\t\t\t<Tree.TreeNode title='1-0' key='1-0'></Tree.TreeNode>\n` +
                            `\t\t</Tree.TreeNode>\n` +
                            `\t\t<Tree.TreeNode defaultExtend={true} title='2' key='2'>\n` +
                              `\t\t\t<Tree.TreeNode title='2-0' key='2-0'></Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode defaultExtend={true} defaultChecked={true} title='2-1' key='2-1'>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-0' key='2-1-0'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-1' key='2-1-1'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-2' key='2-1-2'></Tree.TreeNode>\n` +
                              `\t\t\t</Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode title='2-2' key='2-2'></Tree.TreeNode>\n` +
                            `\t\t</Tree.TreeNode>\n` +
                          `\t</Tree>\n` +
                        `</div>\n` +
                        `\n` +
                        `<div style={{display: 'inline-block'}}>\n` +
                          `\t<p>允许拖拽</p>\n` +
                          `\t<Tree disabledDrag={false}> addon={<Icon className='file-text-o'/>} addonOpen={<Icon className='caret-right'/>} addonClose={<Icon className='caret-down'/>}\n` +
                            `\t\t<Tree.TreeNode title='0' key='0'></Tree.TreeNode>\n` +
                            `\t\t<Tree.TreeNode defaultExtend={true} disabled={true} title='1' key='1'>\n` +
                              `\t\t\t<Tree.TreeNode title='1-0' key='1-0'></Tree.TreeNode>\n` +
                            `\t\t</Tree.TreeNode>\n` +
                            `\t\t<Tree.TreeNode defaultExtend={true} title='2' key='2'>\n` +
                              `\t\t\t<Tree.TreeNode title='2-0' key='2-0'></Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode defaultChecked={true} title='2-1' key='2-1'>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-0' key='2-1-0'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-1' key='2-1-1'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='2-1-2' key='2-1-2'></Tree.TreeNode>\n` +
                              `\t\t\t</Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode title='2-2' key='2-2'></Tree.TreeNode>\n` +
                            `\t\t</Tree.TreeNode>\n` +
                            `\t\t<Tree.TreeNode defaultChecked={true} title='3' key='3'>\n` +
                              `\t\t\t<Tree.TreeNode title='3-0' key='3-0'></Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode title='3-1' key='3-1'>\n` +
                                `\t\t\t\t<Tree.TreeNode title='3-1-0' key='3-1-0'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='3-1-1' key='3-1-1'></Tree.TreeNode>\n` +
                              `\t\t\t</Tree.TreeNode>\n` +
                              `\t\t\t<Tree.TreeNode title='3-2' key='3-2'>\n` +
                                `\t\t\t\t<Tree.TreeNode title='3-2-0' key='3-2-0'></Tree.TreeNode>\n` +
                                `\t\t\t\t<Tree.TreeNode title='3-2-1' key='3-2-1'></Tree.TreeNode>\n` +
                              `\t\t\t</Tree.TreeNode>\n` +
                            `\t\t</Tree.TreeNode>\n` +
                          `\t</Tree>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
                <p>Tree.props</p>
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
                      {name: 'disabled', type: 'bool', default: 'false', desc: '禁用'},
                      {name: 'disabledCheckbox', type: 'bool', default: 'true', desc: '禁用勾选'},
                      {name: 'disabledDrag', type: 'bool', default: 'true', desc: '禁用拖拽'},
                      {name: 'addon', type: 'element', default: '<Icon className="file-o"/>', desc:'图标'},
                      {name: 'addonOpen', type: 'element', default: '<Icon className="plus-square-o"/>', desc:'打开图标'},
                      {name: 'addonClose', type: 'element', default: '<Icon className="minus-square-o"/>', desc:'关闭图标'},
                      {name: 'onCheck', type: 'func', desc:'勾选回调,\n (checked, node) => \{ ... \}'},
                      {name: 'onExpand', type: 'func', desc:'展开回调,\n (expand, node) => \{ ... \}'},
                      {name: 'onSelect', type: 'func', desc:'选中回调,\n (node) => \{ ... \}'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
                  <p>Tree.TreeNode.props</p>
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
                        {name: 'disabled', type: 'bool', default: 'false', desc: '禁用,无法主动勾选、展开'},
                        {name: 'defaultExtend', type: 'bool', default: 'false', desc: '默认展开'},
                        {name: 'defaultChecked', type: 'bool', default: 'false', desc: '默认选中'},
                        {name: 'title', type: 'string', desc:'显示的文本'},
                        {name: 'key', type: 'string', desc:'唯一标识'}
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
