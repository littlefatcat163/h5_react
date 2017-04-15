import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import InputComponent from './InputComponent'
import './_select.scss'

const _selectOnClick = Symbol(`_selectOnClick`)
const _config = Symbol(`_config`)
const _valueChanged = Symbol(`_valueChanged`)
const _selectedMap = Symbol(`_selectedMap`)
const _liKeyIndex = Symbol(`_liKeyIndex`)
const _groupKeyIndex = Symbol(`_groupKeyIndex`)

/**
  @desc 下拉框
  @prop
    data<array>: 对象字段与valueField, textField相关
    valueField<string>: 值字段名，默认'value', data中的对象需要有value属性
    textField<string>: 显示字段名，默认'name', data中的对象需要有name属性
    allowInput<bool>: 允许输入，默认false
    disabled<bool>: 禁用，默认false
    valueChanged<func>: 下拉框选取值变化的时候相应事件 (select) => console.log(select.getValue())
*/

export default class Select extends InputComponent {

  [_config] = {
    selected: false,//是否选中一般不需要管
    valueChanged: null,//值变化监测
    disabled: false,//禁用
    allowInput: false,//允许输入
    valueField: 'value',//值对应的字段名
    textField: 'name'//显示对应的字段名
  };

  [_liKeyIndex] = 0;
  [_groupKeyIndex] = 0;

  ref_selection = null;

  [_selectedMap] = null;

  render() {
    return (
      <div className={`xo-select-container`} style={this.props.style}>
        <div className='xo-select' onClick={(e) => this[_selectOnClick](e)}>
          <div className='xo-select-selection' ref={(ref_selection) => this.ref_selection = ref_selection}>
            {/*this.props.children*/}
          </div>
          <div className='xo-select-result'>
            <div></div>
            <input type='text' ref={(refInput) => this.refInput = refInput} />
          </div>
          <span className='xo-select-arrow'></span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    super.addWindowClick();
    let {valueChanged, disabled, allowInput, valueField, textField} = this.props;
    this.setConfig({ valueChanged: valueChanged, disabled: disabled, allowInput: allowInput, valueField: valueField, textField: textField });
    let data = [];
    let _opts = React.Children.map(this.props.children, (child, index) => {
                  let _child = child;
                  if(child && typeof child == 'object') {
                    if(child.type.displayName == 'OptionGroup') {
                      let _data = { name: child.props.name, children: [] };
                      let optGroupChild = React.Children.map(child.props.children, (opt, optIndex) => {
                                            let _opt = opt;
                                            if(opt && opt.type.displayName == 'Option') {
                                              let optData = {};
                                              optData[this[_config].valueField] = opt.props[this[_config].valueField];
                                              optData[this[_config].textField] = opt.props.children;
                                              _data.children.push(optData);
                                              _opt = React.cloneElement(opt, { ...opt.props, data: optData, valueChanged: (option) => this[_valueChanged](option) });
                                            }
                                            return _opt;
                                          });
                      data.push(_data);
                      _child = React.cloneElement(child, {...child.props, children: optGroupChild});
                    } else if(child.type.displayName == 'Option') {
                      let _data = { };
                      _data[this[_config].valueField] = child.props[this[_config].valueField];
                      _data[this[_config].textField] = child.props.children;
                      _child = <OptionGroup>{ React.cloneElement(child, {...child.children, data: _data, valueChanged: (option) => this[_valueChanged](option)}) }</OptionGroup>;
                    }
                  }
                  return _child;
                });
    ReactDOM.render(<div>{_opts}</div>, this.ref_selection);
    this.data = data;
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  [_selectOnClick](e) {
    e.stopPropagation();
    e.preventDefault();
    if(this[_config].disabled) return;
    if(this[_config].selected) {
      $(this.$dom.find('.xo-select')).removeClass('xo-active');
      $(this.ref_selection).fadeOut(130);
      $(this.refInput).hide();
      $(this.refInput).siblings().show();
    } else {
      $(this.ref_selection).parent().removeClass('xo-select-top').removeClass('xo-select-bottom');
      if(this.$dom.offset().top + $(this.ref_selection).outerHeight() > this.$dom.parent().height() + this.$dom.parent().scrollTop()) $(this.ref_selection).parent().addClass('xo-select-bottom');
      else $(this.ref_selection).parent().addClass('xo-select-top');
      $(this.$dom.find('.xo-select')).addClass('xo-active');
      $(this.ref_selection).fadeIn(130);
      if(this[_config].allowInput) $(this.refInput).show().val($(this.refInput).siblings().text()).focus();
      $(this.refInput).siblings().hide();
    }
    this[_config].selected = !this[_config].selected;
  }

  //窗口点击事件监听
  windowClick(e) {
    if(this[_config].selected) {
      this.$dom.find('.xo-select').removeClass('xo-active');
      $(this.refInput).siblings().show();
      $(this.refInput).hide();
      $(this.ref_selection).fadeOut(130);
    }
  }

  setData(data) {
    this.data = data;
    if(data && data.length) {
      this[_liKeyIndex] += $(this.ref_selection).find('.xo-option-li').length;
      this[_groupKeyIndex] += $(this.ref_selection).find('.xo-option-group').length;
      let _optGroups = [];
      data.forEach((_data, _index) => {
        let opts = null;
        let name = null;
        if(_data.children && _data.children.length) {
          opts = [];
          name = _data[this[_config].textField];
          _data.children.forEach((child, __index) => {
            opts.push(<Option key={this[_liKeyIndex]++} data={child} valueChanged={(option) => this[_valueChanged](option)}>{child[this[_config].textField]}</Option>);
          });
        } else {
          opts = <Option key={this[_liKeyIndex]++} data={_data} valueChanged={(option) => this[_valueChanged](option)}>{_data[this[_config].textField]}</Option>
        }
        _optGroups.push(<OptionGroup key={this[_groupKeyIndex]++} name={name}>{opts}</OptionGroup>);
      });
      ReactDOM.render(<div>{_optGroups}</div>, this.ref_selection);
    } else ReactDOM.render(<div></div>, this.ref_selection);
    $(this.refInput).val('');
    $(this.refInput).siblings().text('');
  }

  setValue(value) {
    if(!this.data || !this.data.length) return;
    let index = -1;
    let selData = null;
    for(let _index in this.data) {
      index ++;
      let _data = this.data[_index];
      if(!_data.children || !_data.children.length) {
        if(_data[this[_config].valueField] == value) selData = _data;
      } else {
        for(let childIndex in _data.children) {
          index ++;
          let child = _data.children[childIndex];
          if(child[this[_config].valueField] == value) { selData = child; break; }
        }
      }
      if(selData) {
        let li = $(this.ref_selection).find('.xo-option-li')[index];
        let isChanged = true;
        if(!this[_selectedMap] || !this[_selectedMap].get(li)) this[_selectedMap] = new Map([[li, selData]]);
        else isChanged = false;
        if(isChanged && this[_config].valueChanged && typeof this[_config].valueChanged == 'function') this[_config].valueChanged(this);
        $(this.refInput).val(selData[this[_config].textField]);
        $(this.ref_selection).find('.xo-option-li').removeClass('xo-active');
        $(li).addClass('xo-active');
        break;
      }
    }
  }

  getValue() {
    let selData = this.getSelected();
    if(selData) return selData[this[_config].valueField];
    else return null;
  }

  /**
    设置选中值
    @param obj 仅仅支持number和obj类型
  */
  setSelected(obj) {
    if(!this.data || !this.data.length) return;
    let li, selData;
    if(typeof obj == 'object' && obj) {
      let index = -1;
      selData = null;
      for(let _index in this.data) {
        index ++;
        let _data = this.data[_index];
        if(!_data.children || !_data.children.length) {
          let same = true;
          for(let key in obj) {
            if(obj[key] != _data[key]) { same = false; break; }
          }
          if(same) selData = _data;
        } else {
          for(let childIndex in _data.children) {
            let same = true;
            for(let key in obj) {
              if(obj[key] != _data.children[childIndex][key]) { same = false; break; }
            }
            if(!same) index ++;
            else { selData = _data.children[childIndex]; break; }
          }
        }
        if(selData) {
          li = $(this.ref_selection).find('.xo-option-li')[index];
          break;
        }
      }
    } else {
      li = $(this.ref_selection).find('.xo-option-li')[obj];
      selData = null;
      let _dataIndex = obj;
      for(let index in this.data) {
        if(!this.data[index].children || !this.data[index].children.length) {
          if(index == obj) { selData = this.data[obj]; break; }
          else _dataIndex --;
        } else {
          if(this.data[index].children.length < _dataIndex) _dataIndex -= this.data[index].children.length;
          else { selData = this.data[index].children[_dataIndex]; break; }
        }
      }
    }
    if(!selData) return;
    let isChanged = true;
    if(!this[_selectedMap] || !this[_selectedMap].get(li)) this[_selectedMap] = new Map([[li, selData]]);
    else isChanged = false;
    if(isChanged && this[_config].valueChanged && typeof this[_config].valueChanged == 'function') this[_config].valueChanged(this);
    $(this.refInput).siblings().text(selData[this[_config].textField]);
    $(this.ref_selection).find('.xo-option-li').removeClass('xo-active');
    $(li).addClass('xo-active');
  }

  getSelected() {
    let selected = null;
    if(this[_selectedMap]) {
      for(let value of this[_selectedMap].values()) selected = value;
    }
    return selected;
  }

  //设置配置
  setConfig(obj) {
    //let oldConfig = Object.assign({}, this[_config]);
    this[_config] = Object.assign(this[_config], obj);
    if(this[_config].disabled) this.disable();
    else this.enable();
    if(!this[_config].allowInput) $(this.refInput).prop('disabled', true);
    else $(this.refInput).prop('disabled', false);
  }

  setStyle(style) {
    $(this.$dom).css(style);
  }

  enable() {
    this.$dom.removeClass('xo-select-disabled');
    this[_config].disabled = false;
  }

  disable() {
    this.$dom.addClass('xo-select-disabled');
    this[_config].disabled = true;
  }

  isDisable() {
    return this[_config].disabled;
  }

  //下拉值变化
  [_valueChanged](option) {
    let isChanged = true;
    if(!this[_selectedMap] || !this[_selectedMap].get(ReactDOM.findDOMNode(option))) this[_selectedMap] = new Map([[ReactDOM.findDOMNode(option), option.getData()]]);
    else isChanged = false;
    if(isChanged && this[_config].valueChanged && typeof this[_config].valueChanged == 'function') this[_config].valueChanged(this);
    $(this.refInput).siblings().text(option.getData()[this[_config].textField]);
    $(this.ref_selection).find('.xo-option-li').removeClass('xo-active');
    $(option.$dom).addClass('xo-active');
  }

}

Select.propTypes = Object.assign({}, InputComponent.propTypes);
Select.propTypes.allowInput = React.PropTypes.bool;
Select.propTypes.valueChanged = React.PropTypes.func;
Select.propTypes.valueField = React.PropTypes.string;
Select.propTypes.textField = React.PropTypes.string;

Select.defaultProps = Object.assign({}, InputComponent.defaultProps);
Select.defaultProps.allowInput = false;
Select.defaultProps.valueField = 'value';
Select.defaultProps.textField = 'name';


/**
  @desc 下拉组
  @prop
    name<string>
    children<Option>
*/
class OptionGroup extends InputComponent {

  render() {
    return (
      <div className='xo-option-group'>
        {this.props.name}
        <ul className='xo-option-ul'>
          {this.props.children}
        </ul>
      </div>
    )
  }

}

OptionGroup.displayName = 'OptionGroup';
Select.OptionGroup = OptionGroup;

/**
  @desc 下拉列
  @prop
    data<array>
    children<string>
*/
class Option extends InputComponent {

  render() {
    return (
      <li className='xo-option-li' onClick={(e) => this.props.valueChanged(this) }>{this.props.children}</li>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    this.setData(this.props.data);
  }

}

Option.displayName = 'Option';
Select.Option = Option;
