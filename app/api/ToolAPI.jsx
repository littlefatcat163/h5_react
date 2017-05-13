import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, xoSystem } from '../components'

export default class ToolAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          name: 'xoSystem',
          list: [
            {
              'data-target': 'operating system',
              name: '系统'
            },
            {
              'data-target': 'browser',
              name: '浏览器'
            },
            {
              'data-target': 'object',
              name: '对象'
            },
            {
              'data-target': 'array',
              name: '数组'
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
          'data-toggle': 'operating system',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>与当前浏览器所在的操作系统相关</h2>
                <ul>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isOX( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    当前浏览器所在的操作系统是否为苹果系统
                  </li>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isWindow( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    当前浏览器所在的操作系统是否为window系统
                  </li>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isWebkit( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    当前浏览器内核是否为-webkit
                  </li>
                </ul>
              </div>
            )
          }
        },
        {
          'data-toggle': 'browser',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>浏览器</h2>
                <ul>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>getBrowser( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return object</span>
                    <br/>
                    <Code>
                      {
                        `{\n` +
                          `\topera<bool>: opera浏览器,\n` +
                          `\tie<bool>:  ie浏览器,\n` +
                          `\twebkit<bool>: webkit内核,\n` +
                          `\tmac<bool>: 苹果,\n` +
                          `\tquirks<bool>: 非常规浏览器,\n` +
                          `\tchrome<string>: Chrome的大版本号\n` +
                          `\tsafari<string>: Safari的大版本号\n` +
                          `\tversion<string>: 版本\n` +
                        `}`
                      }
                    </Code>
                  </li>
                </ul>
              </div>
            )
          }
        },
        {
          'data-toggle': 'object',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>对象</h2>
                <ul>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isEmpty( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    是否为空
                    <Code>
                      {
                        `xoSystem.isEmpty() => ${xoSystem.isEmpty()}\n` +
                        `xoSystem.isEmpty(null) => ${xoSystem.isEmpty(null)}\n` +
                        `xoSystem.isEmpty(0) => ${xoSystem.isEmpty(0)}\n` +
                        `xoSystem.isEmpty('') => ${xoSystem.isEmpty('')}\n` +
                        `xoSystem.isEmpty('0') => ${xoSystem.isEmpty('0')}`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isFunc( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    是否为方法
                    <Code>
                      {
                        `xoSystem.isFunc() => ${xoSystem.isFunc()}\n` +
                        `xoSystem.isFunc('0') => ${xoSystem.isFunc('0')}\n` +
                        `xoSystem.isFunc( () => {} ) => ${xoSystem.isFunc(() => {})}`
                      }
                    </Code>
                  </li>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>isObject( )</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return bool</span>
                    是否为对象
                    <Code>
                      {
                        `xoSystem.isObject() => ${xoSystem.isObject()}\n` +
                        `xoSystem.isObject('0') => ${xoSystem.isObject('0')}\n` +
                        `xoSystem.isObject(null) => ${xoSystem.isObject(null)}\n` +
                        `xoSystem.isObject( {} ) => ${xoSystem.isObject({})}\n` +
                        `xoSystem.isObject( () => {} ) => ${xoSystem.isObject(() => {})}`
                      }
                    </Code>
                  </li>
                </ul>
              </div>
            )
          }
        },
        {
          'data-toggle': 'array',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>数组</h2>
                <ul>
                  <li className='xo-margin-bottom-sm'>
                    <i className='xo-font-rose-red xo-margin-right-xs'>sort(array, sortOrder, fields)</i>
                    <span className='xo-font-primary xo-margin-right-xs'>return Array</span>
                    排序
                    <Code>
                      {
                        `array: 需要排序的数组\n` +
                        `sortOrder: 需要排序的方向, desc倒序(默认), asc正序\n` +
                        `fields: 排序要对比的字段\n` +
                        `\n` +
                        `xoSystem.sort( [2,4,3,1] ) => ${xoSystem.sort( [1,2,3,4] )}\n` +
                        `xoSystem.sort( [2,4,3,1], 'asc' ) => ${xoSystem.sort( [2,4,3,1], 'asc' )}\n` +
                        `xoSystem.sort( [ {t1: 2, t2: 'a'}, {t1: 1, t2: 'b'}, {t1: 4, t2: 'd'}, {t1: 3, t2: 'c'} ], 'asc', ['t1'] ) \n` +
                        `\t\t=> ${
                          (() => {
                            let array = xoSystem.sort( [ {t1: 2, t2: 'a'}, {t1: 1, t2: 'b'}, {t1: 4, t2: 'd'}, {t1: 3, t2: 'c'} ], 'asc', ['t1'] );
                            let str = '[';
                            array.forEach((arr, index) => {
                              let sp = '';
                              if(index < array.length - 1) sp = ',';
                              str += ` { t1: ${arr.t1}, t2: ${arr.t2}}${sp}`;
                            });
                            str += ' ]';
                            return str;
                          })()
                        }`
                      }
                    </Code>
                  </li>
                </ul>
              </div>
            )
          }
        }
      ]
    )
  }

}
