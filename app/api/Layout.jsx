import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from './BaseComponent'

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
                <h1>grid 栅格</h1>
                <p>12栅格</p>
              </div>
            )
          }
        }
      ]
    )

  }

}
