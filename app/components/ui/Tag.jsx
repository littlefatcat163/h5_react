import React from 'react'

import BaseComponent from '../BaseComponent'
import xoSystem from '../../tool/_xoSystem'
import './_tag.scss'

export default class Tag extends BaseComponent {

  render() {
    let disabledClass = 'xo-disabled';
    if(!this.props.disabled) disabledClass = '';
    let close = null;
    if(xoSystem.isFunc(this.props.onClose)) close = <span className='xo-icon-close' onClick={(e) => { if(!this.props.disabled) this.props.onClose(this, e) }}></span>;
    return (
      <div className={`xo-tag ${disabledClass}`} style={this.props.style}>
        <span title={this.props.title}>{this.props.children}</span>
        {close}
      </div>
    )
  }

}

Tag.displayName = 'Tag';
