import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { createStore } from 'redux'
import { Provider, connect } from "react-redux"
import BaseComponent from '../BaseComponent'
import Button from '../input/Button'
import xoSystem from '../../tool/_xoSystem'
import './_modal.scss'

const _move = Symbol(`_move`)
const _extrude = Symbol(`_extrude`)

class Box extends BaseComponent {

  render() {
    let { title, okText, cancelText, body } = this.props.config;
    if(xoSystem.isEmpty(okText)) okText = 'OK';
    if(xoSystem.isEmpty(cancelText)) cancelText = 'Cancel';
    let dragStyle = { cursor: 'move' };
    if(!this.props.config.allowDrag) dragStyle = { cursor: 'default' };
    let resizeStyle = { cursor: 'se-resize' };
    if(!this.props.config.allowResize) resizeStyle = { cursor: 'default' };
    let header = null;
    if(this.props.config.header) header = <div className={`xo-modal-header-btn`}>
                                            <span className='xo-icon-close' onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.destroy(); this.close(false); }}></span>
                                          </div>;
    let footer = null;
    if(this.props.config.footer) footer = <div className={`xo-modal-footer`}>
                                            <Button className='xo-margin-right-xs' onClick={() => { this.destroy(); this.close(false); }}>{cancelText}</Button>
                                            <Button type={Button.TYPE.PRIMARY} onClick={() => { this.destroy(); this.close(true); }}>{okText}</Button>
                                          </div>;
    return (
      <div className={`xo-modal`} style={this.props.style}>
        {header}
        <div className={`xo-modal-header`} onMouseDown={(e) => this[_move](e)} style={dragStyle}>
          {title}
        </div>
        <div className={`xo-modal-body`}>
          {body}
        </div>
        {footer}
        <span className='xo-modal-ext' onMouseDown={(e) => this[_extrude](e)} style={resizeStyle}></span>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    this.$dom.css({top: 100});
  }

  destroy(e) {
    if(xoSystem.isFunc(this.props.destroy)) this.props.destroy();
  }

  close(result) {
    if(xoSystem.isFunc(this.props.config.close)) this.props.config.close(result);
  }

  [_move](e) {
    if(!this.props.config.allowDrag) return;
    document.body.onselectstart = () => { return false }
    let _pageX = e.pageX;
    let _pageY = e.pageY;
    this.$dom.parent()
      .on('mousemove', (dom) => {
        let distX = dom.pageX - _pageX;
        _pageX += distX;
        let distY = dom.pageY - _pageY;
        _pageY += distY;
        this.$dom.css({top: this.$dom[0].offsetTop + distY, left: this.$dom.position().left + distX});
      })
      .on('mouseup', (e) => {
        this.$dom.parent().mouseleave();
      })
      .on('mouseleave', (dom) => {
        this.$dom.parent().off('mouseleave').off('mouseup').off('mousemove');
        document.body.onselectstart = () => { return true }
      });
  }

  [_extrude](e) {
    if(!this.props.config.allowResize) return;
    document.body.onselectstart = () => { return false }
    let _pageX = e.pageX;
    let _pageY = e.pageY;
    this.$dom.parent()
      .on('mousemove', (dom) => {
        let distX = dom.pageX - _pageX;
        _pageX += distX;
        let distY = dom.pageY - _pageY;
        _pageY += distY;
        let width = this.$dom.width() + distX;
        if(width < 200) width = 200;
        this.$dom.width(width);
        let $body = this.$dom.find('.xo-modal-body');
        let height = $body.height() + distY;
        if(height < 50) height = 50;
        $body.height(height);
      })
      .on('mouseup', (e) => {
        this.$dom.parent().mouseleave();
      })
      .on('mouseleave', (dom) => {
        this.$dom.parent().off('mouseleave').off('mouseup').off('mousemove');
        document.body.onselectstart = () => { return true }
      });
  }

}

Box.propTypes = {
  config: React.PropTypes.object
}

Box.defaultProps = {
  config: {}
}

class ModalBox extends BaseComponent {

  render() {
    return (
      <div className={`xo-modal-container`}>
        { this.props.modal }
      </div>
    )
  }

}

class NoticeBox extends BaseComponent {

  closeTimer = null;

  render() {
    return (
      <div className={`xo-notice`}>
        <div className={`xo-notice-header-btn`}>
          <span className={`xo-icon-close`} onClick={() => this.destroy()}></span>
        </div>
        <div className={`xo-notice-body`}>
          {this.props.body}
        </div>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    let bottom = this.$dom.height();
    this.$dom.prevAll().each((index, prev) => {
      $(prev).css({bottom: bottom});
      bottom += $(prev).height();
    });
    this.closeTimer = setTimeout(() => {
      this.destroy();
    }, this.props.duration);
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer);
    this.closeTimer = null;
  }

  destroy() {
    let pervList = this.$dom.prevAll();
    let bottom = parseInt(this.$dom.css('bottom'));
    if(xoSystem.isFunc(this.props.destroy)) {
      this.props.destroy(this);
    }
    pervList.each((index, prev) => {
      $(prev).css({bottom: bottom});
      bottom += $(prev).height();
    });
  }

}

class Notice extends BaseComponent {

  noticeKey = 0;

  constructor(props) {
    super(props);
    this.state = { notices: [] }
  }

  render() {
    return (
      <div className={`xo-notice-container`}>
        { this.state.notices }
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.notices.length == 0) {
      this.props.destroy();
    }
  }

  add(notice) {
    let notices = this.state.notices;
    let key = this.noticeKey++;
    notice = React.cloneElement(notice, {...notice.props, key: key, 'data-key': key, destroy: (_notice) => this.remove(_notice)});
    this.setState({notices: notices.concat(notice)});
  }

  remove(_notice) {
    this.setState(function (previousState) {
      return {
        notices: previousState.notices.filter(function (notice) {
          return notice.key != _notice.props['data-key'];
        })
      };
    });
  }

}

let noticeInstance = null;

Notice.newInstance = () => {
  if(!noticeInstance) {
    noticeInstance = (() => {
      let div = document.createElement('div');
      document.body.appendChild(div);
      const destroy = () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        noticeInstance = null;
      }
      const compoent = ReactDOM.render(React.createElement(Notice, {destroy: destroy}), div);
      const notice = (box) => {
        compoent.add(box);
      }
      let key = 0;
      return {
        compoent: compoent,
        destroy: destroy,
        notice: notice
      }
    })()
  }
  return noticeInstance;
}


class Modal {

  static confirm(properties) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let config = {
      title: '',
      body: '',
      close: null,
      allowDrag: true,
      allowResize: true,
      header: true,
      footer: true
    }
    config = Object.assign(config, properties);
    const destroy = () => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
    const modal = <Box destroy={destroy} config={config} />;
    const compoent = ReactDOM.render(React.createElement(ModalBox, {modal: modal}), div);
    return (
      compoent: compoent,
      destroy: destroy
    )
  }

  static info(body = null, duration = 2000) {

    Notice.newInstance().notice(
      <NoticeBox
        body={<div className='xo-notice-info'><span className='xo-notice-icon fa fa-info-circle'></span><div>{body}</div></div>}
        duration={duration}/>
      );
  }

  static success(body = null, duration = 2000) {

    Notice.newInstance().notice(
      <NoticeBox
        body={<div className='xo-notice-success'><span className='xo-notice-icon fa fa-check-circle'></span><div>{body}</div></div>}
        duration={duration}/>
      );
  }

  static warn(body = null, duration = 2000) {

    Notice.newInstance().notice(
      <NoticeBox
        body={<div className='xo-notice-warn'><span className='xo-notice-icon fa fa-exclamation-circle'></span><div>{body}</div></div>}
        duration={duration}/>
      );
  }

  static danger(body = null, duration = 2000) {

    Notice.newInstance().notice(
      <NoticeBox
        body={<div className='xo-notice-danger'><span className='xo-notice-icon fa fa-times-circle'></span><div>{body}</div></div>}
        duration={duration}/>
      );
  }

  static destroy() {
    if(noticeInstance) noticeInstance.destroy();
  }

}

export default Modal;
