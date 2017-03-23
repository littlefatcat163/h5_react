import React from 'react'

import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table } from '../components'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

export default class ButtonAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'button',
          list: [
            { 'data-target': 'btn', name: '按钮' }
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
