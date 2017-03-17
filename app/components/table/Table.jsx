/**
  @author mxb
  @desc 轻量化表格
  @prop
    columns: [
      {
        field<string>: '列对应data要显示的属性名称', （必须提供）
        title<string>: '列显示的字段名称', （必须提供）
        key<string>: '相应react-dom的key', （如果不提供，则默认以field为key）
        width<number>: 列宽,
        type<string>: 类型, 与排序有关,（默认string）, number, indexColumn, checkboxColumn
        sortOrder<string>: 排序方向, （默认null）, asc, desc
        allowResize<bool>: 允许支持拉伸, （默认true）, false
        className<string>: 其他的class标识,作用于th
        render<function>: 返回对应渲染th内容 => function(indexData) {}
      }
    ]

    data<array>: 数据源

    //其他配置项
    config: {
      width<number>: 默认<auto>
      height<number>: 默认<auto>
      allowPager<bool>: 允许分页,（默认false）， true
      pagerSpac<number>: 分页间隔,（默认10）
      multiSelect<bool>: 是否支持选, （默认false）， true
      allowAsyn<bool>: 允许异步加载数据, （默认false）， true 一般需要设置响应的url
      url<string>: 请求地址
      dataResolve<function>: 数据解析 => function(asynData) { return asynData; //默认return 请求回来的数据，可以自行处理数据格式或其他逻辑 }
      onCellRender<function>: 用于td渲染前的操作 => function(sender) { return sender.value }
      onRowClick<function>: 行点击 => function(sender) {}
      onCellClick<function>: 表格点击 => function(sender) {}
    }
*/

import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'
import './table.scss'

const _map = Symbol('_map')
const _columns = Symbol('_columns')
const _column = Symbol('_column')
const _data = Symbol('_data')
const _config = Symbol('_config')
const _renderThead = Symbol('_renderThead')
const _renderTbody = Symbol('_renderTbody')
const _renderGetTableWidth = Symbol('_renderGetTableWidth')//渲染获取表格宽度

export default class Table extends BaseComponent {

  [_map] = new Map();
  [_columns] = null;
  [_column] = {
    field: '',
    title: '',
    key: '',
    width: 100,
    type: 'string',
    sortOrder: null,
    allowResize: true,
    className: null,
    render: null,
    _theadMark: true
  };
  [_data] = null;
  [_config] = {
    width: '100%',
    height: '100%'
  };
  ref_theadContainer = null;
  ref_tbodyContainer = null;

  render() {
    return (
      <div className='xo-table-container'>
        <div className='xo-table-container-thead' ref={(_theadContainer) => this.ref_theadContainer = _theadContainer}>
          {/* <table className='xo-table xo-table-line'>
            <tbody className='xo-table-thead'>
              <tr>
                <td width='100'>调试1</td>
                <td width='100'>调试2</td>
                <td width='100'>调试3</td>
                <td width='100'>调试4</td>
                <td width='100'>调试5</td>
                <td width='100'>调试6</td>
                <td width='100'>调试7</td>
                <td width='100'>调试8</td>
                <td width='100'>调试9</td>
                <td width='100'>调试10</td>
                <td width='100'>调试11</td>
                <td width='100'>调试12</td>
              </tr>
            </tbody>
          </table> */}
        </div>
        <div className='xo-table-container-tbody' ref={(_tbodyContainer) => this.ref_tbodyContainer = _tbodyContainer}>
        </div>
        {/* <table className='xo-table' cellSpacing='0' cellPadding='0'>
          <thead>
            <tr>
              {
                this.props.columns.map((column, index) => {
                  let _th = <th key={`xo-table-thead-th-${column.field}`}>{column.title}</th>;
                  this[_map].set(column, _th);
                  return _th;
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((_data, index) => {
                let tds = [];
                for(let key of this[_map].keys()) {
                  let _td = <td key={`xo-table-tbody-td-${index}-${key.field}`}>{_data[key.field]}</td>;
                  tds.push(_td);
                }
                let _tr = <tr key={`xo-table-tbody-tr-${index}`}>{tds}</tr>;
                this[_map].set(_data, _tr);
                return _tr;
              })
            }
          </tbody>
        </table> */}
      </div>
    )
  }

  componentDidMount() {
    //this.enableEvent = true;
    super.componentDidMount();
    super.addEventListener();
    Object.assign(this[_config], this.props.config);
    //if(this[_config].width == 'auto') {
      this.$dom.width(this.$dom.parent().width());
      $(this.ref_theadContainer).width(9999);
    //}
    this[_columns] = this.props.columns;
    this[_data] = this.props.data;
    this.refesh();
  }

  refesh() {
    this[_renderThead]();
    this[_renderTbody]();
  }

  windowResize() {
    if(this[_config].width == '100%') {
      this.$dom.width(100);
      let width = this.$dom.parent().width();
      this.$dom.width(width);
      $(this.ref_theadContainer).find('table').width(width - 1);
      $(this.ref_tbodyContainer).find('table').width(width - 1);
    }
  }

  [_renderThead]() {
    let thead = <table className='xo-table xo-table-line' style={{width: this[_renderGetTableWidth]()}}>
                  <thead className='xo-table-thead'>
                    <tr>
                      {
                        this[_columns].map((column, index) => {
                          column = Object.assign({}, this[_column], column);
                          let _th = <th width={column.width} className={column.className} key={`xo-table-thead-th-${column.field}`}>
                                      <div>
                                        {
                                          ((__column) => {
                                            if(__column.render && typeof __column.render == 'function') return __column.render()
                                            else return __column.title
                                          })(column)
                                        }
                                      </div>
                                    </th>;
                          this[_map].set(column, _th);
                          return _th;
                        })
                      }
                    </tr>
                  </thead>
                </table>;
    ReactDOM.render(thead, this.ref_theadContainer);
  }

  [_renderTbody]() {
    let tbody = <table className='xo-table xo-table-line' style={{width: this[_renderGetTableWidth]()}}>
                  <tbody>
                    {
                      this[_data].map((_data, index) => {
                        let tds = [];
                        for(let column of this[_map].keys()) {
                          if(column._theadMark) {
                            let _td = <td width={column.width} key={`xo-table-tbody-td-${index}-${column.field}`}>
                                        <div>
                                          {
                                            ((__this, __data, __column) => {
                                              let cellRenderDOM = null;
                                              if(__this[_config].onCellRender && typeof __this[_config].onCellRender == 'function')
                                                cellRenderDOM = __this[_config].onCellRender({column: __column, data: __data});
                                              if(!cellRenderDOM) cellRenderDOM = __data[__column.field];
                                              return cellRenderDOM;
                                            })(this, _data, column)
                                          }
                                        </div>
                                      </td>;
                            tds.push(_td);
                          }
                        }
                        let _tr = <tr key={`xo-table-tbody-tr-${index}`}>{tds}</tr>;
                        this[_map].set(_data, _tr);
                        return _tr;
                      })
                    }
                  </tbody>
                </table>;
    ReactDOM.render(tbody, this.ref_tbodyContainer);
  }

  [_renderGetTableWidth]() {
    if(this[_config].width == '100%') return this.$dom.width();
    else return 'auto';
  }

}

Table.propTypes = {
  columns: React.PropTypes.array,
  data: React.PropTypes.array
}

Table.defaultProps = {
  columns: [],
  data: []
}
