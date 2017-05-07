import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'
import Input from '../input/Input'
import Select from '../input/Select'
import xoSystem from '../../tool/_xoSystem'
import './_pager.scss'

const _config = Symbol(`_config`)
const _gap = Symbol(`_gap`)
const _liOnClick = Symbol(`_liOnClick`)
const _jump = Symbol(`_jump`);
const _onBlur = Symbol(`_onBlur`)

export default class Pager extends BaseComponent {

  [_config] = {};
  [_gap] = 0;

  refInput = null;

  constructor(props) {
    super(props);
    this.state = { list: null };
  }

  render() {
    return (
      <ul unselectable='unselectable' className='xo-pager' style={this.props.style}>
        {this.state.list}
      </ul>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    const config = {
      gap: this.props.gap,
      total: this.props.total,
      allowJump: this.props.allowJump,
      allowGap: this.props.allowGap,
      current: this.props.current,
      onChange: this.props.onChange
    }
    this.setConfig(config);
    this.refesh();
  }

  setConfig(config) {
    this[_config] = Object.assign(this[_config], config);
    let count = this[_config].total / this[_config].gap;
    if(parseInt(count) < count) count = parseInt(count) + 1;
    this[_config].count = count;
    this[_gap] = this[_config].gap;
    if(this[_config].current > count) this[_config].current = count;
  }

  refesh() {
    let list = [<li key='prev' onClick={(e) => this[_jump](e)}><a className='fa fa-angle-left'></a></li>];
    const { gap, total, current, count } = this[_config];
    if(current > 3 && count > 5) {
      list.push(<li key='1' onClick={(e) => this[_liOnClick](e)}><a>1</a></li>);
      list.push(<li className='xo-pager-gap' key='prevGap' onClick={(e) => this[_jump](e)}><a className='fa fa-ellipsis-h'></a><a className='fa fa-angle-double-left'></a></li>);
    }

    let lower = current - 2;
    if(lower < 1) lower = 1;
    let limit = lower + 4;
    if(limit > count) limit = count;
    if(limit - lower < 4) lower = limit - 4;
    if(lower < 1) lower = 1;

    for(let i = lower; i <= limit; i++)
    {
      let activeClass = '';
      if(i == current) activeClass = 'xo-active';
      list.push(<li className={activeClass} onClick={(e) => this[_liOnClick](e)} key={i}><a>{i}</a></li>);
    }
    if(limit < count) {
      list.push(<li className='xo-pager-gap' key='nextGap' onClick={(e) => this[_jump](e)}><a className='fa fa-ellipsis-h'></a><a className='fa fa-angle-double-right'></a></li>);
      list.push(<li key={count} onClick={(e) => this[_liOnClick](e)}><a>{count}</a></li>);
    }
    list.push(<li key='next' onClick={(e) => this[_jump](e)}><a className='fa fa-angle-right'></a></li>);
    // if(this[_config].allowGap) {
    //   let data = [
    //     { name: 10, value: 10 }
    //   ];
    //   list.push(<li className='xo-parger-input' key='select'><Select data={data}/></li>);
    // }
    if(this[_config].allowJump) {
      list.push(<li className='xo-parger-input' key='input'><Input ref={(refInput) => this.refInput = refInput} value={this[_config].current} allowInputType={[Input.ALLOW_INPUT_TYPE.NUMBER]} style={{width: 40}} onBlur={() => { this[_onBlur]() }}/></li>);
      list.push(<li key='go' onClick={(e) => this[_jump](e)}><a>Go</a></li>);
    }
    this.setState({list: list});
    if(this.refInput) this.refInput.setValue(this[_config].current);
    if(xoSystem.isFunc(this[_config].onChange)) this[_config].onChange(this[_config].current);
  }

  [_liOnClick](e) {
    let key = parseInt(super.findReactDOMNode(e).key);
    if(key == this[_config].current) return;
    this[_config].current = parseInt(key);
    this.refesh();
  }

  [_jump](e) {
    let key = super.findReactDOMNode(e).key;
    let _curent = 0;
    if(key == 'prev') {
      _curent = this[_config].current - 1;
    } else if(key == 'next') {
        _curent = this[_config].current + 1;
    } else if(key == 'prevGap') {
      _curent = this[_config].current - 5;
    }else if(key == 'nextGap') {
      _curent = this[_config].current + 5;
    } else if(key == 'go') {
      _curent = parseInt(this.refInput.getValue());
    }
    if(_curent < 1) _curent = 1;
    else if(_curent > this[_config].count) _curent = this[_config].count;
    if(!_curent) return;
    if(_curent != this[_config].current) {
      this[_config].current = _curent;
      this.refesh();
    }
  }

  [_onBlur]() {
    let value = parseInt(this.refInput.getValue());
    if(!value) this.refInput.setValue(this[_config].current);
    else if(value > this[_config].count) this.refInput.setValue(this[_config].count);
  }

}

Pager.displayName = 'Pager'

Pager.propTypes = {
  gap: React.PropTypes.number,       //分页间隔
  total: React.PropTypes.number,     //总数
  allowJump: React.PropTypes.bool,   //允许跳转
  allowGap: React.PropTypes.bool,    //允许分页间隔 -待完善
  current: React.PropTypes.number,   //当前页
  onChange: React.PropTypes.func,    //当前分页值修改时回调
  style: React.PropTypes.object
}

Pager.defaultProps = {
  gap: 10,
  allowJump: true,
  allowGap: true,
  total: 0,
  current: 1
}
