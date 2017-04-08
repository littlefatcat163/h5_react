import React from 'react'

import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table, Icon } from '../components'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

export default class ButtonAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'button',
          list: [
            { 'data-target': 'btn', name: '按钮' },
            { 'data-target': 'icon-btn', name: '图标按钮' },
            { 'data-target': 'btn-group', name: '按钮组' },
            { 'data-target': 'btn-level', name: '多级按钮' }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'btn',
          render: function() {
            return (
              <div className='xo-col-xs-12'>
                <h2>按钮尺寸</h2>
                <p>
                  props.size => Button.SIZE 提供尺寸枚举值 -> SM, XS（默认）, MD, LG, XL, BLOCK
                </p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button className='xo-margin-right-md' size={Button.SIZE.SM}>xo-btn-sm</Button>
                      <Button className='xo-margin-right-md'>xo-btn-xs</Button>
                      <Button className='xo-margin-right-md' size={Button.SIZE.MD}>xo-btn-md</Button>
                      <Button className='xo-margin-right-md' size={Button.SIZE.LG}>xo-btn-lg</Button>
                      <Button className='xo-margin-right-md' size={Button.SIZE.XL}>xo-btn-xl</Button>
                      <div className='xo-margin-top-md'>
                        <Button className='xo-margin-right-md' size={Button.SIZE.BLOCK}>xo-btn-block</Button>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button className='xo-margin-right-md' size={Button.SIZE.SM}>xo-btn-sm</Button>\n` +
                        `<Button className='xo-margin-right-md'>xo-btn-xs</Button>\n` +
                        `<Button className='xo-margin-right-md' size={Button.SIZE.MD}>xo-btn-md</Button>\n` +
                        `<Button className='xo-margin-right-md' size={Button.SIZE.LG}>xo-btn-lg</Button>\n` +
                        `<Button className='xo-margin-right-md' size={Button.SIZE.XL}>xo-btn-xl</Button>\n` +
                        `<div className='xo-margin-top-md'>\n` +
                          `\t<Button className='xo-margin-right-md' size={Button.SIZE.BLOCK}>xo-btn-block</Button>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>按钮类型</h2>
                <p>
                  props.type => Button.TYPE 提供类型枚举值 -> DEFALUT（默认）, PRIMARY, INFO, WARN, SUCCESS, DANGER
                </p>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button className='xo-margin-right-md'>default</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.PRIMARY}>primary</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.INFO}>info</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.WARN}>warn</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.SUCCESS}>success</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.DANGER}>danger</Button>
                      <Button className='xo-margin-right-md' disabled={true}>default</Button>
                      <Button className='xo-margin-right-md' type={Button.TYPE.DANGER} disabled={true}>danger</Button>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button className='xo-margin-right-md'>default</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.PRIMARY}>primary</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.INFO}>info</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.WARN}>warn</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.SUCCESS}>success</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.DANGER}>danger</Button>\n` +
                        `<Button className='xo-margin-right-md' disabled={true}>default</Button>\n` +
                        `<Button className='xo-margin-right-md' type={Button.TYPE.DANGER} disabled={true}>danger</Button>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>事件</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <BtnEvent/>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `//这里使用了redux作为调试例子\n` +
                        `import { createStore } from 'redux'\n` +
                        `import { Provider, connect } from 'react-redux'\n` +
                        `\n` +
                        `<BtnEvent/>\n` +
                        `\n` +
                        `class Btn extends React.Component {\n` +
                        `\n` +
                          `\tconstructor(props) {\n` +
                            `\t\tsuper(props);\n` +
                          `\t}\n` +
                        `\n` +
                          `\trender() {\n` +
                            `\t\tconst { disable, onClick } = this.props;\n` +
                            `\t\tlet text = '点击禁用';\n` +
                            `\t\tif(disable) text = '点击启用';\n`+
                            `\t\treturn (\n` +
                              `\t\t\t<div className='xo-padding-xs'>\n` +
                                `\t\t\t\t<Button className='xo-margin-right-md' onClick={onClick}>{text}</Button>\n` +
                                `\t\t\t\t<Button className='xo-margin-right-md' type={Button.TYPE.INFO} disabled={disable} onClick={(btn) => alert('click')}>info</Button>\n` +
                              `\t\t\t</div>\n` +
                            `\t\t)\n` +
                          `\t}\n` +
                        `\n` +
                        `}\n` +
                        `\n` +
                        `const clickAction = { type: 'click' }\n` +
                        `\n` +
                        `function reducer(state = { disable: false }, action) {\n` +
                          `\tswitch (action.type) {\n` +
                            `\tcase 'click':\n` +
                              `\t\treturn {disable: !state.disable};\n` +
                            `\tdefault:\n` +
                              `\t\treturn state;\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `const store = createStore(reducer);\n` +
                        `\n` +
                        `function mapStateToProps(state) {\n` +
                          `\treturn { disable: state.disable }\n` +
                        `}\n` +
                        `\n` +
                        `function mapDispathToProps(dispath) {\n` +
                          `\treturn { onClick : () => dispath(clickAction) }\n` +
                        `}\n` +
                        `\n` +
                        `const ReduxBtn = connect(mapStateToProps, mapDispathToProps)(Btn);\n` +
                        `const BtnEvent = () => {\n` +
                          `\treturn (\n` +
                            `\t\t<Provider store={store}>\n` +
                              `\t\t\t<ReduxBtn/>\n` +
                            `\t\t</Provider>\n` +
                          `\t)\n` +
                        `}\n`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <h2>简单操作button的几个方法</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <div className='xo-margin-bottom-md'>
                        <Button size={Button.SIZE.XL} ref={(_tBtn) => this.tBtn = _tBtn}>效果</Button>
                      </div>
                      <Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.hide()}>点击隐藏</Button>
                      <Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.show()}>点击显示</Button>
                      <Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.disable()}>点击禁用</Button>
                      <Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.enable()}>点击启用</Button>
                      <Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.setText('修改了...')}>点击修改文本</Button>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div className='xo-margin-bottom-md'>\n` +
                          `\t<Button size={Button.SIZE.XL} ref={(_tBtn) => this.tBtn = _tBtn}>效果</Button>\n` +
                        `</div>\n` +
                        `<Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.hide()}>点击隐藏</Button>\n` +
                        `<Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.show()}>点击显示</Button>\n` +
                        `<Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.disable()}>点击禁用</Button>\n` +
                        `<Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.enable()}>点击启用</Button>\n` +
                        `<Button className='xo-margin-right-md' onClick={(btn) => this.tBtn.setText('修改了...')}>点击修改文本</Button>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <br/>
                <br/>
                <h2>API</h2>
                <p>prop</p>
                <Table
                  columns={
                    [
                      {title: 'name', field: 'name', width: 100},
                      {title: 'type', field: 'type', width: 100},
                      {title: 'default', field: 'default', width: 200},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'size', type: 'enum', default: 'Button.SIZE.XS', desc: '按钮大小\nButton.SIZE.XS  //默认尺寸\nButton.SIZE.SM  //小\nButton.SIZE.MD  //中\nButton.SIZE.LG  //偏大\nButton.SIZE.XL  //大\nButton.SIZE.BLOCK  //宽度占满父级'},
                      {name: 'type', type: 'enum', default: 'Button.TYPE.DEFAULT', desc: '按钮样式\nButton.TYPE.DEFAULT\nButton.TYPE.PRIMARY\nButton.TYPE.INFO\nButton.TYPE.WARN\nButton.TYPE.SUCCESS\nButton.TYPE.DANGER'}
                    ]
                  }
                  config={
                    {
                      onCellRender: function(sender) {
                        if(sender.column.field == 'desc') {
                          let descList = sender.data.desc.split('\n');
                          return(
                            descList.map((desc, index) => {
                              return <p key={index}>{desc}</p>
                            })
                          )
                        }
                      }
                    }
                  }/>
              </div>
            )
          }
        },
        {
          'data-toggle': 'icon-btn',
          render: () => {
            return (
              <div className='xo-col-xs-12'>
                <h2>图标按钮</h2>
                <div className='xo-margin-left-xs'>
                  <p>
                    按钮子级添加<em className='xo-margin-left-xs xo-font-primary'>Icon</em>
                  </p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button className='xo-margin-right-md'>查询<Icon className='search'/></Button>
                      <Button><Icon className='search'/>查询</Button>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button className='xo-margin-right-md'>查询<Icon className='search'/></Button>\n` +
                        `<Button><Icon className='search'/>查询</Button>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <p>Icon</p>
                <Table
                  columns={
                    [
                      { title: 'name', field: 'name', width: 100 },
                      { title: 'type', field: 'type', width: 100 },
                      { title: 'default', field: 'default', width: 200 },
                      { title: 'desc', field: 'desc' }
                    ]
                  }
                  data={
                    [
                      { name: 'className', type: 'string', desc: '对应样式class' },
                      { name: 'type', type: 'enum', default: 'Icon.left', desc: '位置类型' },
                      { name: 'style', type: 'object', desc: '内嵌样式' }
                    ]
                  }/>
                  <p>
                    与按钮呈现位置，在文字前显示在左，文字后显示在右
                  </p>
              </div>
            )
          }
        },
        {
          'data-toggle': 'btn-group',
          render: () => {
            return (
              <div className='xo-col-xs-12'>
                <h2>按钮组</h2>
                <div className='xo-margin-left-xs'>
                  <p>水平(默认)</p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button.BtnGroup>
                        <Button>one</Button>
                        <Button>two</Button>
                        <Button>three</Button>
                      </Button.BtnGroup>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button.BtnGroup>\n` +
                          `\t<Button>one</Button>\n` +
                          `\t<Button>two</Button>\n` +
                          `\t<Button>three</Button>\n` +
                        `</Button.BtnGroup>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <div className='xo-margin-left-xs'>
                  <p>垂直</p>
                </div>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs'>
                      <Button.BtnGroup type={Button.BtnGroup.TYPE.VER}>
                        <Button onClick={(d, s) => {console.log(d)}}>one</Button>
                        <Button><Icon className='puzzle-piece'/>two<Icon className='shield'/></Button>
                        <Button>three</Button>
                      </Button.BtnGroup>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button.BtnGroup type={Button.BtnGroup.TYPE.VER}>\n` +
                          `\t<Button onClick={(d, s) => {console.log(d)}}>one</Button>\n` +
                          `\t<Button><Icon className='puzzle-piece'/>two<Icon className='shield'/></Button>\n` +
                          `\t<Button>three</Button>\n` +
                        `</Button.BtnGroup>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
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
                      { name: 'className', type: 'string', desc: '对应样式class' },
                      { name: 'type', type: 'enum', default: 'Button.BtnGroup.TYPE.HOR', desc: '按钮组显示类型\nButton.BtnGroup.TYPE.HOR //默认水平\nButton.BtnGroup.TYPE.VER  //垂直' },
                      { name: 'style', type: 'object', desc: '内嵌样式' }
                    ]
                  }
                  config={
                    {
                      onCellRender: function(sender) {
                        if(sender.column.field == 'desc') {
                          let descList = sender.data.desc.split('\n');
                          return(
                            descList.map((desc, index) => {
                              return <p key={index}>{desc}</p>
                            })
                          )
                        }
                      }
                    }
                  }/>
              </div>
            )
          }
        },
        {
          'data-toggle': 'btn-level',
          render: () => {
            return (
              <div className='xo-col-xs-12'>
                <h2>多级按钮</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs' style={{height: 160}}>
                      <Button.BtnDrop
                        data={
                          [
                            {
                              name: '一级按钮1',
                              children: [
                                { name: '二级按钮1', children: [{name: '三级按钮1'}, {name: '三级按钮2'}] },
                                { name: '二级按钮2' },
                                { name: '二级按钮3', children: [{name: '三级按钮1', children: [{name: '四级按钮1'}, {name: '四级按钮2'}]}] }
                              ]
                            },
                            {
                              name: '一级按钮2'
                            },
                            {
                              name: '一级按钮3',
                              children: [
                                { name: '2级按钮1' },
                                { name: '2级按钮2', children: [{name: '3级按钮1'}, {name: '3级按钮2'}, {name: '3级按钮3'}] },
                                { name: '2级按钮3' }
                              ]
                            }
                          ]
                        }/>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button.BtnDrop\n` +
                          `\tdata={\n` +
                            `\t\t[\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\tname: '一级按钮1',\n` +
                                `\t\t\t\tchildren: [\n` +
                                  `\t\t\t\t\t{ name: '二级按钮1', children: [{name: '三级按钮1'}, {name: '三级按钮2'}] },\n` +
                                  `\t\t\t\t\t{ name: '二级按钮2' },\n` +
                                  `\t\t\t\t\t{ name: '二级按钮3', children: [{name: '三级按钮1', children: [{name: '四级按钮1'}, {name: '四级按钮2'}]}] }\n` +
                                `\t\t\t\t]\n` +
                              `\t\t\t},\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\tname: '一级按钮2'\n` +
                              `\t\t\t},\n` +
                              `\t\t\t{\n` +
                                `\t\t\t\t\tname: '一级按钮3',\n` +
                                `\t\t\t\tchildren: [\n` +
                                  `\t\t\t\t\t{ name: '2级按钮1' },\n` +
                                  `\t\t\t\t\t{ name: '2级按钮2', children: [{name: '3级按钮1'}, {name: '3级按钮2'}, {name: '3级按钮3'}] },\n` +
                                  `\t\t\t\t\t{ name: '2级按钮3' }\n` +
                                `\t\t\t\t]\n` +
                              `\t\t\t}\n` +
                            `\t\t]\n` +
                          `\t}/>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs' style={{height: 160}}>
                      <Button.BtnDrop
                        type={Button.BtnDrop.TYPE.VER}
                        config={{onClick: (e, sender) => { console.log(e); console.log(sender); }}}
                        data={
                          [
                            {
                              name: '一级按钮1',
                              children: [{ name: '二级按钮1' }, { name: '二级按钮2', children: [{ name: '三级按钮1' }, { name: '三级按钮2' }] }]
                            },
                            {
                              name: '一级按钮2',
                              render: (sender) => { return <Button onClick={(btn, e) => { console.log(btn); console.log(e); }} size={Button.SIZE.MD} type={Button.TYPE.INFO}>{sender.name}<Icon className='bars'/></Button> }
                            },
                            {
                              name: '一级按钮3',
                              size: Button.SIZE.SM,
                              type: Button.TYPE.WARN,
                              children: [
                                { name: '2级按钮1', children: [{ name: '3级按钮1' },
                                { name: '2级按钮2' }]},
                                { name: '2级按钮3', size: Button.SIZE.XS, type: Button.TYPE.DANGER, children: [ {name: '3级按钮1', size: Button.SIZE.LG, type: Button.TYPE.SUCCESS}, { name: '3级按钮2' } ] } ]
                            }
                          ]
                        }/>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<Button.BtnDrop\n` +
                          `\ttype=\{Button.BtnDrop.TYPE.VER\}\n` +
                          `\tconfig=\{\{onClick: (e, sender) => \{ console.log(e); console.log(sender); \}\}\}\n` +
                          `\tdata=\{\n` +
                            `\t\t[\n` +
                              `\t\t\t\{\n` +
                                `\t\t\t\tname: '一级按钮1',\n` +
                                `\t\t\t\tchildren: [{ name: '二级按钮1' }, { name: '二级按钮2', children: [{ name: '三级按钮1' }, { name: '三级按钮2' }] }]\n` +
                              `\t\t\t\},\n` +
                              `\t\t\t\{\n` +
                                `\t\t\t\tname: '一级按钮2',\n` +
                                `\t\t\t\trender: (sender) => { return <Button onClick={(btn, e) => { console.log(btn); console.log(e); }} size={Button.SIZE.MD} type={Button.TYPE.INFO}>{sender.name}<Icon className='bars'/></Button> }\n` +
                              `\t\t\t\},\n` +
                              `\t\t\t\{\n` +
                                `\t\t\t\tname: '一级按钮3',\n` +
                                `\t\t\t\tsize: Button.SIZE.SM,\n` +
                                `\t\t\t\ttype: Button.TYPE.WARN,\n` +
                                `\t\t\t\tchildren: [\n` +
                                  `\t\t\t\t\t\{ name: '2级按钮1', children: [\{ name: '3级按钮1' \},\n` +
                                  `\t\t\t\t\t\{ name: '2级按钮2' \}]\},\n` +
                                  `\t\t\t\t\t\{ name: '2级按钮3', size: Button.SIZE.XS, type: Button.TYPE.DANGER, children: [ \{name: '3级按钮1', size: Button.SIZE.LG, type: Button.TYPE.SUCCESS\}, \{ name: '3级按钮2' \} ] \} ]\n` +
                              `\t\t\t}\n` +
                            `\t\t]\n` +
                          `\t}/>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
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
                      { name: 'type', type: 'enum', default: 'Button.BtnDrop.TYPE.HOR', desc: '按钮组显示类型\nButton.BtnGroup.TYPE.HOR //默认水平\nButton.BtnGroup.TYPE.VER  //垂直' },
                      { name: 'data', type: 'array', desc: '数据\n格式：\n[\n\{\nname: 按钮名称,\n size: 对应Button.SIZE,\n type: 对应Button.TYPE,\n render: (sender) => \{ return ... \}, \nchildren: [\{name, size, type, render, children...\}]\n//children中size,type会默认使用与父级一致的size,type\n\}\n]' },
                      { name: 'config', type: 'object', desc: '其他配置项\n onClick: (e, sender) => {...} //每个按钮点击后都会触发' }
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

class Btn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { disable, onClick } = this.props;
    let text = '点击禁用';
    if(disable) text = '点击启用';
    return (
      <div className='xo-padding-xs'>
        <Button className='xo-margin-right-md' onClick={onClick}>{text}</Button>
        <Button className='xo-margin-right-md' type={Button.TYPE.INFO} disabled={disable} onClick={(btn) => alert('click')}>info</Button>
      </div>
    )
  }

}

const clickAction = { type: 'click' }

function reducer(state = { disable: false }, action) {
  switch (action.type) {
    case 'click':
      return {disable: !state.disable};
    default:
      return state;
  }
}

const store = createStore(reducer);

function mapStateToProps(state) {
  return { disable: state.disable }
}

function mapDispathToProps(dispath) {
  return { onClick : () => dispath(clickAction) }
}

const ReduxBtn = connect(mapStateToProps, mapDispathToProps)(Btn);
const BtnEvent = () => {
  return (
    <Provider store={store}>
      <ReduxBtn/>
    </Provider>
  )
}

//表格渲染描述
const cellRender = (sender) => {
  if(sender.column.field == 'desc') {
    let descList = sender.data.desc.split('\n');
    return(
      descList.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })
    )
  }
}
