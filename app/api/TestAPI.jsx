import React from 'react'
import BaseComponent from './BaseComponent'
import { Button, Tabs, Code, Table, xoSystem } from '../components'
import TestRedux from '../test/TestRedux'
import TestReduxOther from '../test/TestReduxOther'

export default class TestAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'Redux',
          list: [
            { 'data-target': 'redux-desc', name: '说明' },
            { 'data-target': 'redux-demo', name: '示例' }
          ]
        },
        {
          name: 'Promise',
          list: [
            { 'data-target': 'promise-desc', name: '说明' },
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'redux-demo',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <TestRedux />
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `import React from 'react'\n` +
                        `import { createStore } from 'redux'\n` +
                        `import { Provider, connect } from 'react-redux'\n` +

                        `import Button from '../component/input/Button'\n` +
                        `import Input from '../component/input/Input'\n` +
                        `\n` +
                        `class Redux extends React.Component {\n` +
                          `\n` +
                          `\tconstructor(props) {\n` +
                            `\t\tsuper(props)\n` +
                          `\t}\n` +
                          `\n` +
                          `\trender() {\n` +
                            `\t\tconst { value, onIncreaseClick, inputValue, onAddTodo } = this.props;\n` +
                            `\t\treturn(\n` +
                              `\t\t\t<div>\n` +
                                `\t\t\t\t<div className='xo-margin-bottom-xs'>\n` +
                                  `\t\t\t\t\t<span className='xo-margin-right-xs'>{value}</span>\n` +
                                  `\t\t\t\t\t<Button onClick={onIncreaseClick}>Increase</Button>\n` +
                                `\t\t\t\t</div>\n` +
                                `\t\t\t\t<div>\n` +
                                  `\t\t\t\t\t<Input className='xo-margin-right-xs' value='test' ref={(input) => this.refInput = input}/>\n` +
                                  `\t\t\t\t\t<Button onClick={(btn) => onAddTodo(this.refInput.getValue())}>addTodo</Button>\n` +
                                  `\t\t\t\t\t<span className='xo-margin-left-xs'>{inputValue}</span>\n` +
                                `\t\t\t\t</div>\n` +
                              `\t\t\t</div>\n` +
                            `\t\t)\n` +
                          `\t}\n` +
                          `\n` +
                        `}\n` +
                        `\n` +
                        `const increaseAction = { type: 'increase' }\n` +
                        `const addTodo = (text) => {\n` +
                          `\treturn {\n` +
                            `\t\ttype: 'addTodo',\n` +
                            `\t\ttext\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `function counter(state = { count: 0, inputValue: 'test' }, action) {\n` +
                          `\tconst { count, inputValue } = state\n` +
                          `\tswitch (action.type) {\n` +
                            `\t\tcase 'increase':\n` +
                              `\t\t\treturn { count: count + 1, inputValue: inputValue }\n` +
                            `\t\tcase 'addTodo':\n` +
                              `\t\t\treturn { count: count, inputValue: action.text }\n` +
                            `\t\tdefault:\n` +
                              `\t\t\treturn state\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `const store = createStore(counter)\n` +
                        `\n` +
                        `function mapStateToProps(state) {\n` +
                          `\treturn {\n` +
                            `\t\tvalue: state.count,\n` +
                            `\t\tinputValue: state.inputValue\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `function mapDispathToProps(dispatch) {\n` +
                          `\treturn {\n` +
                            `\t\tonIncreaseClick : () => dispatch(increaseAction),\n` +
                            `\t\tonAddTodo: (text) => dispatch(addTodo(text))\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `const Comp = connect(\n` +
                          `\tmapStateToProps,\n` +
                          `\tmapDispathToProps\n` +
                        `)(Redux)\n` +
                        `\n` +
                        `const TestRedux = () => {\n` +
                          `\treturn (\n` +
                            `\t\t<Provider store={store}>\n` +
                              `\t\t\t<Comp/>\n` +
                            `\t\t</Provider>\n` +
                          `\t)\n` +
                        `}\n` +
                        `\n` +
                        `export default TestRedux`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <TestReduxOther />
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `import React from 'react'\n` +
                        `import { createStore } from 'redux'\n` +
                        `import { Provider, connect } from 'react-redux'\n` +
                        `import Button from '../component/input/Button'\n` +
                        `import Input from '../component/input/Input'\n` +
                        `\n` +
                        `const increaseAction = { type: 'increase' }\n` +
                        `const addTodo = (text) => {\n` +
                          `\treturn {\n` +
                            `\t\ttype: 'addTodo',\n` +
                            `\t\ttext\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `function counter(state = { count: 0, inputValue: '' }, action) {\n` +
                          `\tconst { count, inputValue } = state\n` +
                          `\tswitch (action.type) {\n` +
                            `\t\tcase 'increase':\n` +
                              `\t\t\treturn { count: count + 1, inputValue: inputValue }\n` +
                            `\t\tcase 'addTodo':\n` +
                              `\t\t\treturn { count: count, inputValue: action.text }\n` +
                            `\t\tdefault:\n` +
                              `\t\t\treturn state\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `const store = createStore(counter)\n` +
                        `\n` +
                        `export default class TestReduxOther extends React.Component {\n` +
                          `\n` +
                          `\tunsubscribe = null\n` +
                          `\n` +
                          `\tconstructor(props) {\n` +
                            `\t\tsuper(props);\n` +
                          `\t}\n` +
                          `\n` +
                          `\tcomponentWillMount() {\n` +
                            `\t\tthis.state = store.getState();\n` +
                          `\t}\n` +
                          `\n` +
                          `\trender() {\n` +
                            `\t\treturn(\n` +
                              `\t\t\t<div>\n` +
                                `\t\t\t\t<div className='xo-margin-bottom-xs'>\n` +
                                  `\t\t\t\t\t<span className='xo-margin-right-xs'>{this.state.count}</span>\n` +
                                  `\t\t\t\t\t<Button onClick={() => store.dispatch(increaseAction)}>Increase</Button>\n` +
                                `\t\t\t\t</div>\n` +
                                `\t\t\t\t<div>\n` +
                                  `\t\t\t\t\t<Input className='xo-margin-right-xs' value='test' ref={(input) => this.refInput = input}/>\n` +
                                  `\t\t\t\t\t<Button onClick={(btn) => store.dispatch(addTodo(this.refInput.getValue()))}>addTodo</Button>\n` +
                                  `\t\t\t\t\t<span className='xo-margin-left-xs'>{this.state.inputValue}</span>\n` +
                                `\t\t\t\t</div>\n` +
                              `\t\t\t</div>\n` +
                            `\t\t)\n` +
                          `\t}\n` +
                          `\n` +
                          `\tcomponentDidMount() {\n` +
                            `\t\tthis.unsubscribe = store.subscribe( () => { this.setState(store.getState()) });\n` +
                            `\t\tstore.dispatch(addTodo(this.refInput.getValue()));\n` +
                            `\t\tstore.dispatch(increaseAction);\n` +
                          `\t}\n` +
                          `\n` +
                          `\tcomponentWillUnmount() {\n` +
                            `\t\tthis.unsubscribe();\n` +
                          `\t}\n` +
                          `\n` +
                        `}`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        },
        {
          'data-toggle': 'redux-desc',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>三大原则</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>单一数据源，整个应用的state被储存在一棵object tree中，并且这个object tree只存在于唯一一个store中</li>
                  <li className='xo-margin-bottom-xs'>state是只读的，唯一改变state的方法是触发<span className='xo-font-rose-red xo-margin-left-xs'>action</span></li>
                  <li className='xo-margin-bottom-xs'>使用纯函数来执行修改，action对于state tree的改动<span className='xo-font-rose-red xo-margin-left-xs'>reducers</span></li>
                </ul>
                <div style={{height: 50}}></div>
                <h2>Action</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>
                    是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷
                  </li>
                  <li className='xo-margin-bottom-xs'>是 store 数据的唯一来源</li>
                  <li className='xo-margin-bottom-xs'>一般通过<span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>store.dispatch( )</span>将action传到store</li>
                  <li className='xo-margin-bottom-xs'>
                    本质上是js的普通对象，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作，多数情况下，type 会被定义成字符串常量
                    <Code>
                      {
                        `const testAction = {\n` +
                          `\ttype: 'test',\n` +
                          `\ttext: 'test action text'\n` +
                        `}\n` +
                        `\n` +
                        `store.dispatch(testAction)`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    创建函数，即生成action的方法，这样就可以为action传参
                    <Code>
                      {
                        `const addTodo = (text) => {\n` +
                          `\treturn {\n` +
                            `\t\ttype: 'addTodo',\n` +
                            `\t\ttext\n` +
                          `\t}\n` +
                        `}\n` +
                        `\n` +
                        `store.dispatch(addTodo('addTodo param text'))`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    store通过
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>store.dispatch( action )</span>
                    调用action，
                    但是多数情况下使用
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>react-redux</span>
                    提供的<span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>connect( )</span>
                    帮助使用
                  </li>
                </ul>
                <div style={{height: 50}}></div>
                <h2>Reducer</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>
                    纯函数，接收旧的state和action，返回新的state
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    保持纯净，单单执行计算
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    响应以上action，如下demo
                    <Code>
                      {
                        `function testReducer(state = { value: '' }, action) {\n` +
                          `\tswitch (action.type) {\n` +
                            `\t\tcase 'test':\n` +
                              `\t\t\treturn { value: 'test action' }\n` +
                            `\t\tcase 'addTodo':\n` +
                              `\t\t\treturn { value: action.text }\n` +
                            `\t\tdefault:\n` +
                              `\t\t\treturn state\n` +
                          `\t}\n` +
                        `}`
                      }
                    </Code>
                  </li>
                </ul>
                <div style={{height: 50}}></div>
                <h2>Store</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>把action与reducer联系到一起</li>
                  <li className='xo-margin-bottom-xs'>维持应用的 state</li>
                  <li className='xo-margin-bottom-xs'>
                    提供<span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>getState( )</span>方法获取 state
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    提供
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>
                    dispatch(
                      <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>action</span>
                    )
                    </span>
                    方法获取 state
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    提供
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>
                    subscribe(
                      <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>listener</span>
                    )
                    </span>
                    注册监听器，
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>listener</span>
                    为<span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>reducer</span>
                    执行完毕后的监听
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    提供
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>
                    subscribe(
                      <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>listener</span>
                    )
                    </span>
                    返回的函数注销监听器
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    redux应用下只有一个单一的store，
                    当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    对应以上定义的action、reducer
                    <Code>
                      {
                        `//创建store\n` +
                        `let store = createStore(testReducer)\n` +
                        `\n` +
                        `//注册监听，每次state更新，subscribe()返回一个函数用来注销监听器\n` +
                        `let unsubscribe = store.subscribe(() =>\n` +
                          `\tconsole.log(store.getState())\n` +
                        `)\n` +
                        `\n` +
                        `//发起action\n` +
                        `store.dispatch(addTodo('Learn about actions'))\n` +
                        `store.dispatch(addTodo('Learn about reducers'))\n` +
                        `store.dispatch(addTodo('Learn about store'))\n` +
                        `store.dispatch(testAction)\n` +
                        `\n` +
                        `//停止监听state更新\n` +
                        `unsubscribe()`
                      }
                    </Code>
                  </li>
                </ul>
                <div style={{height: 50}}></div>
                <a className='xo-font-primary' target='_blank' href='http://www.redux.org.cn/'>redux中文文档</a>
              </div>
            )
          }
        },
        {
          'data-toggle': 'promise-desc',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>Promise</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>
                    异步编程的一种解决方案，ES6将其写进了语言标准，统一了语法，原生提供
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>Promise</span>
                    对象
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    对象的状态不受外界影响，
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>Promise</span>
                    代表了一个异步操作，有三种状态：
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Pending</span>
                    （进行中）、
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Resolved</span>
                    （已完成，又称 Fulfilled）、
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Rejected</span>
                    （已失败）
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    一旦状态改变，就不会再变，任何时候都可以得到这个结果，
                    状态只有两种可能：
                    从
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Pending</span>
                    变为
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Resolved</span>
                    或
                    从
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Pending</span>
                    变为
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Rejected</span>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    一旦新建
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>Promise</span>
                    就会立刻执行，无法中途取消
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    如果不设置回调函数，
                    <span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>Promise</span>
                    内部抛出的错误，不会反应到外部
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    处于<span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Pending</span>
                    状态时，无法得知目前进展到哪一个阶段（刚开始还是即将完成）
                  </li>
                </ul>
                <div style={{height: 50}}></div>
                <h2>基本用法</h2>
                <ul>
                  <li className='xo-margin-bottom-xs'>
                    <span className='xo-font-primary xo-margin-right-xs'>Promise</span>
                    对象是一个构造函数，用来生成实例
                    <Code>
                      {
                        `let promise = new Promise(function(resolve, reject) {\n` +
                          `\tif ( /* 操作成功 */ ) resolve(value);\n` +
                          `\telse reject(error);\n` +
                        `})`
                      }
                    </Code>
                    接受一个函数作为参数，该函数的两个参数
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>resolve</span>
                    函数的作用，当状态完成的时候，将结果传递出去；
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>reject</span>
                    函数的作用，当状态失败的时候，将错误传递出去
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    实例生成后，可以用
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>then</span>
                    方法分别指定
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Resolved</span>
                    和
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Rejected</span>
                    的回调函数
                    <Code>
                      {
                        `promise.then(function(value) {\n` +
                          `\t\/\/ success\n` +
                        `}, function(error) {\n` +
                          `\t\/\/ failure\n` +
                        `})`
                      }
                    </Code>
                    <span className='xo-font-rose-red xo-margin-right-xs'>then</span>
                    方法可以接受两个回调函数作为参数，第一个回调函数对应
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Resolved</span>
                    ，第二个回调函数对应
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Rejected</span>
                    <Code>
                      {
                        `let promise = new Promise(function(resolve, reject) {\n` +
                          `\tconsole.log('Promise');\n` +
                          `\tresolve();\n` +
                        `});\n` +
                        `\n` +
                        `promise.then(function() {\n` +
                          `\tconsole.log('Resolved.');\n` +
                        `});\n` +
                        `\n` +
                        `console.log('Hi!');\n` +
                        `\n` +
                        `// Promise\n` +
                        `// Hi!\n` +
                        `// Resolved`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-xs'>
                    <span className='xo-font-rose-red xo-margin-right-xs'>catch</span>
                    是
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>.then(null, rejection)</span>
                    的别名，用于指定发生异常时的回调函数，
                    如果<span className='xo-font-primary xo-margin-left-xs xo-margin-right-xs'>Promise</span>
                    状态变为<span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Resolved</span>
                    ，则会调用then方法指定的回调；如果抛出异常，状态就会变成
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>Rejected</span>
                    ，就用调用catch方法指定的回调，
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>then</span>
                    方法指定的回调函数如果运行中抛出异常，也回被
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>catch</span>
                    捕获
                    <Code>
                      {
                        `var someAsyncThing = function() {\n` +
                          `\treturn new Promise(function(resolve, reject) {\n` +
                            `\t\t\/\/ 下面一行会报错，因为x没有声明\n` +
                            `\t\tresolve(x + 2);\n` +
                          `\t});\n` +
                        `};\n` +
                        `\n` +
                        `someAsyncThing()\n` +
                        `\t.catch(function(error) {\n` +
                          `\t\tconsole.log('oh no', error);\n` +
                        `\t})\n` +
                        `\t.then(function() {\n` +
                          `\t\tconsole.log('carry on');\n` +
                        `\t});\n` +
                        `// oh no [ReferenceError: x is not defined]\n` +
                        `// carry on`
                      }
                    </Code>
                    上面代码运行完
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>catch</span>
                    方法指定的回调函数，会接着运行后面那个
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>then</span>
                    方法指定的回调函数。如果没有报错，则会跳过
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>catch</span>
                    方法
                    <Code>
                      {
                        `Promise.resolve()\n` +
                        `.catch(function(error) {\n` +
                          `\tconsole.log('oh no', error);\n` +
                        `})\n` +
                        `.then(function() {\n` +
                          `\tconsole.log('carry on');\n` +
                        `});\n` +
                        `// carry on`
                      }
                    </Code>
                    上面的代码因为没有报错，跳过了
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>catch</span>
                    方法，直接执行后面的
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>then</span>
                    方法。
                    此时，要是then方法里面报错，就与前面的
                    <span className='xo-font-rose-red xo-margin-left-xs xo-margin-right-xs'>catch</span>
                    无关了
                  </li>
                </ul>
                <a className='xo-font-primary' target='_blank' href='http://es6.ruanyifeng.com/#docs/promise'>Promise对象</a>
              </div>
            )
          }
        }
      ]
    )
  }

}
