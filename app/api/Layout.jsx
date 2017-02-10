import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from './BaseComponent'
import { Tab } from '../components'

export default class Layout extends BaseComponent {

  constructor(props) {
    super(props);
  }

  renderLeftDOM() {
    return (
      <div className='x-api-left-list'>
        <ul className='x-api-left-ul'>
          <h3>布局</h3>
          <li>
            <div>layout</div>
            <ul>
              <li data-target='layoutGrid'>栅格</li>
              <li data-target='layoutPos'>定位</li>
            </ul>
          </li>
          <li>
            <div>flex</div>
            <ul>
              <li>flex container</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  //
  getRightDOMList() {

    return (
      [
        {
          'data-toggle': `layoutGrid`,
          render: function() {
            return (
              <div className='x-col-lg-12'>
                <h1>Grid 栅格</h1>
                <p>12栅格系统</p>
                <h2>容器</h2>
                <Tab>
                  <Tab.TabPane key='content'>
                    <div className="x-layout x-border-light-gray" style={{padding: 20}}>
                      <div className="x-col-lg-6 x-border-primary">x-col-lg-6</div>
                      <div className="x-col-lg-6 x-border-success" style={{height: 100}}>x-col-lg-6</div>
                      x-layout
                    </div>
                  </Tab.TabPane>
                </Tab>
              </div>
            )
          }
        }
      ]
    )

  }

}
