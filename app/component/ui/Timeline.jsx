import React from 'react'
import BaseComponent from '../BaseComponent'
import xoSystem from '../../tool/_xoSystem'
import Icon from './Icon'
import './_timeline.scss'

export default class Timeline extends BaseComponent {

  render() {
    return (
      <ul className={`xo-timeline`} style={this.props.style}>
        {
          React.Children.map(this.props.children, (child, index) => {
            if(typeof child == 'object' && child && child.type.displayName == Timeline.Item.displayName) return child;
          })
        }
      </ul>
    )
  }

}

Timeline.displayName = 'Timeline';

Timeline.Item = class Item extends BaseComponent {

  render() {
    let icon = <Icon className='circle-o'/>;
    if(xoSystem.isObject(this.props.icon) && this.props.icon.type.displayName == Icon.displayName) icon = this.props.icon;
    return (
      <li className='xo-timeline-item'>
        <div className='xo-timeline-item-line'></div>
        <div className='xo-timeline-item-icon'>{icon}</div>
        <div className='xo-timeline-item-content'>
          {this.props.children}
        </div>
      </li>
    )
  }

}
Timeline.Item.displayName = 'Timeline.Item';
