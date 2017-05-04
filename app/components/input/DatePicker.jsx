import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import InputComponent from './InputComponent'
import './_datePicker.scss'

const _onClick = Symbol(`_onClick`)
const _onHandleClick = Symbol(`_onHandleClick`)
const _resolveFormat = Symbol(`_resolveFormat`)
export default class DatePicker extends InputComponent {

  config = null;
  $div = null;
  container = null;
  format = null;
  value = null;

  render() {
    return(
      <div className={`xo-date-picker`}>
        <input ref={(refInput) => this.refInput = refInput} readOnly type='text' onClick={(e) => this[_onClick](e)}/>
        <span className='xo-icon fa fa-calendar'></span>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    super.addWindowClick();
    super.addResizeEventListener();
    this.format = this.props.format;
    this.setData(this.props.data);
    if(this.props.disabled) this.disable();
    else this.enable();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    if(this.container) {
      ReactDOM.unmountComponentAtNode(this.$div[0]);
      this.container = null;
      this.$div.remove();
      this.$div = null;
    }
  }

  windowClick() {
    if(this.$div) {
      this.$div.hide();
    }
  }

  windowResize() {
    if(this.container) {
      let offset = this.$dom.find('input').offset();
      this.container.setStyle({top: offset.top, left: offset.left});
    }
  }

  setConfig(config) {
    this.config = Object.assign(this.config, config);
  }

  [_onClick](e) {
    e.stopPropagation();
    e.preventDefault();
    if($(e.currentTarget).is(':disabled')) return;
    if(!this.$div) {
      this.$div = $('<div style="position: absolute; top: 0; left: 0;"></div>');
      $(document.body).append(this.$div);
      let offset = $(e.currentTarget).offset();
      this.container = ReactDOM.render(React.createElement(Container, {top: offset.top, left: offset.left, date: this.data, onHandleClick: (e, over) => this[_onHandleClick](e, over)}), this.$div[0]);
    } else {
      this.$div.show();
      this.container.refesh();
    }
  }

  [_onHandleClick](e, over) {
    e.stopPropagation();
    e.preventDefault();
    if(over) {
      this.$div.hide();
      this[_resolveFormat](this.container.data);
    }
  }

  setValue(value) {
    this.value = value;
    this.$dom.find('input').val(value);
  }

  getValue() {
    return this.value;
  }

  hide() {
    super.hide();
    if(this.$div) this.$div.hide();
  }

  [_resolveFormat](data) {
    let format = this.format.toUpperCase();
    let yFi = format.indexOf('Y');
    let yLi = format.lastIndexOf('Y');
    let mFi = format.indexOf('M');
    let mLi = format.lastIndexOf('M');
    let _m = mLi + 1 - mFi;
    let dFi = format.indexOf('D');
    let dLi = format.lastIndexOf('D');
    let _d = dLi + 1 - dFi;
    let year = data.getFullYear() + '';
    let month = data.getMonth() + 1;
    let date = data.getDate();
    if(month < 10) month = '0' + month;
    else { month += ''; _m = 2; }
    if(date < 10) date = '0' + date;
    else { date += ''; _d = 2; }

    let result = format;
    result = result.replace(result.substr(yFi, yLi + 1 - yFi), year.substr(year.length - (yLi + 1 - yFi), year.length))
                   .replace(result.substr(mFi, mLi + 1 - mFi), month.substr(month.length - _m, month.length))
                   .replace(result.substr(dFi, dLi + 1 - dFi), date.substr(date.length - _d, date.length));
    this.data = data;
    this.setValue(result);
  }

  setFormat(format) {
    this.format = format;
    this[_resolveFormat](this.data);
  }

  setData(data) {
    this.data = data;
    if(this.container) this.container.setData(data);
    if(this.data && this.data instanceof Date) {
      this[_resolveFormat](this.data);
    }
  }

}

DatePicker.propTypes = Object.assign({}, InputComponent.propTypes);
DatePicker.propTypes.format = React.PropTypes.string;

DatePicker.defaultProps = Object.assign({}, InputComponent.defaultProps);
DatePicker.defaultProps.format = 'yyyy-mm-dd';

class Container extends InputComponent {

  refDate = null;
  dateMap = null;
  refMonth = null;
  refYear = null;

  date = null;

  render() {
    return (
      <div className='xo-date-picker-container' style={{top: this.props.top, left: this.props.left}}>
        <div className='xo-date' ref={ (refDate) => this.refDate = refDate }>
          <div className='xo-date-picker-header'>
            <span className='fa fa-angle-double-left xo-icon' onClick={(e) => this.changeYear(e, -1)}></span>
            <span className='fa fa-angle-left xo-icon' onClick={(e) => this.changeMonth(e, -1)}></span>
            <span className='xo-margin-right-xs' onClick={(e) => this.showYear(e)}></span>
            <span onClick={(e) => this.showMonth(e)}></span>
            <span className='fa fa-angle-right xo-icon' onClick={(e) => this.changeMonth(e, 1)}></span>
            <span className='fa fa-angle-double-right xo-icon' onClick={(e) => this.changeYear(e, 1)}></span>
          </div>
          <div className='xo-date-picker-body'>

          </div>
          <div className='xo-date-picker-footer'>
            <a onClick={(e) => this.nowDate(e)}>now</a>
          </div>
        </div>
        <div className='xo-month' ref={ (refMonth) => this.refMonth = refMonth } style={{display: 'none'}}>
          <div className='xo-date-picker-header'>
            <span className='fa fa-angle-double-left xo-icon' onClick={(e) => this.changeYear(e, -1)}></span>
            <span className='xo-margin-right-xs'></span>
            <span></span>
            <span className='fa fa-angle-double-right xo-icon' onClick={(e) => this.changeYear(e, 1)}></span>
          </div>
          <div className='xo-date-picker-body'>
            <table>
              <tbody>
                <tr>
                  <td><a onClick={(e) => this.onMonthClick(e, 1)}>一</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 2)}>二</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 3)}>三</a></td>
                </tr>
                <tr>
                  <td><a onClick={(e) => this.onMonthClick(e, 4)}>四</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 5)}>五</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 6)}>六</a></td>
                </tr>
                <tr>
                  <td><a onClick={(e) => this.onMonthClick(e, 7)}>七</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 8)}>八</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 9)}>九</a></td>
                </tr>
                <tr>
                  <td><a onClick={(e) => this.onMonthClick(e, 10)}>十</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 11)}>十一</a></td>
                  <td><a onClick={(e) => this.onMonthClick(e, 12)}>十二</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='xo-year' ref={ (refYear) => this.refYear = refYear } style={{display: 'none'}}>
          <div className='xo-date-picker-header'>
            <span className='fa fa-angle-double-left xo-icon' onClick={(e) => this.changeYear(e, -10)}></span>
            <span className='xo-margin-right-xs'></span>
            <span></span>
            <span className='fa fa-angle-double-right xo-icon' onClick={(e) => this.changeYear(e, 10)}></span>
          </div>
          <div className='xo-date-picker-body'>
            <table>
            </table>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    this.setData(this.props.date);
    this.updateDate(this.data);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  refesh() {
    this.setData(this.data);
    this.updateDate(this.data);
  }

  setStyle(style) {
    this.$dom.css(style);
  }

  setData(date) {
    if(!date) date = new Date();
    this.data = date;
    this.date = new Date(this.data);
  }

  updateDate(date) {
    this.dateMap = new Map();
    $($(this.refDate).find('.xo-date-picker-header span')[2]).text(`${date.getFullYear()}年`);
    $($(this.refDate).find('.xo-date-picker-header span')[3]).text(`${date.getMonth() + 1}月`);
    let trList = [];
    let dayList = [];
    let dayIndex = 0;
    let curMonthFirstDate = new Date(date);
    curMonthFirstDate.setDate(1);
    if(curMonthFirstDate.getDay() != 0) {
      let preMonthLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
      for(let i = curMonthFirstDate.getDay() - 1; i >= 0; i--) {
        let _date = new Date(preMonthLastDate);
        _date.setDate(_date.getDate() - i);
        let td = <td key={`${_date.getFullYear()}${_date.getMonth()}${_date.getDate()}`}><a className='xo-other' onClick={(e) => this.onDateClick(e, false)}>{preMonthLastDate.getDate() - i}</a></td>;
        dayList.push(td);
        this.dateMap.set(td, _date);
        dayIndex ++;
      }
    }
    let curMonthLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for(let i = 1; i <= curMonthLastDate.getDate(); i++) {
      let activeClass = '';
      if(i == date.getDate()) activeClass = 'xo-active';
      let _date = new Date(curMonthLastDate);
      _date.setDate(i);
      let td = <td key={`${_date.getFullYear()}${_date.getMonth()}${_date.getDate()}`}><a className={`${activeClass}`} onClick={(e) => this.onDateClick(e, true)}>{i}</a></td>;
      dayList.push(td);
      this.dateMap.set(td, _date);
      dayIndex ++;
      if(dayIndex % 7 == 0) {
        let _dayList = dayList;
        trList.push(<tr key={`tr-${trList.length}`}>{_dayList}</tr>);
        dayList = [];
      }
    }
    let i = 1;

    let nextMonthDate = new Date(curMonthLastDate);
    nextMonthDate.setDate(1);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

    do {
      let _date = new Date(nextMonthDate);
      _date.setDate(i);
      let td = <td key={`${_date.getFullYear()}${_date.getMonth()}${_date.getDate()}`}><a className='xo-other' onClick={(e) => this.onDateClick(e, false)}>{i}</a></td>;
      dayList.push(td);
      this.dateMap.set(td, _date);
      i++;
      dayIndex ++;
      if(dayIndex % 7 == 0) {
        let _dayList = dayList;
        trList.push(<tr key={`tr-${trList.length}`}>{dayList}</tr>);
        dayList = [];
      }
    } while (dayIndex < 42)

    let table = <table>
                  <thead>
                    <tr>
                      <th>日</th>
                      <th>一</th>
                      <th>二</th>
                      <th>三</th>
                      <th>四</th>
                      <th>五</th>
                      <th>六</th>
                    </tr>
                  </thead>
                  <tbody>
                    { trList }
                  </tbody>
                </table>;
    ReactDOM.render(table, $(this.refDate).find('.xo-date-picker-body')[0]);
  }

  onDateClick(e, curMonthDay) {
    let selDate = this.dateMap.get(super.findReactDOMNode(e, 'td'));
    if(this.date.getMonth() == selDate.getMonth()) {
      $(this.refDate).find('tbody a').removeClass('xo-active');
      $(e.currentTarget).addClass('xo-active');
    }
    this.setData(new Date(selDate));
    // else {
    //   this.setData(new Date(selDate));
    //   this.updateDate(this.data);
    // }
    this.props.onHandleClick(e, true);
  }

  changeMonth(e, num) {
    let curDate = this.date.getDate();
    this.date.setDate(1);
    this.date.setMonth(this.date.getMonth() + num);
    let lastDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    if(lastDate > curDate) this.date.setDate(curDate);
    else this.date.setDate(lastDate);
    this.updateDate(this.date);
    this.props.onHandleClick(e, false);
  }

  changeYear(e, num) {
    let curDate = this.date.getDate();
    this.date.setDate(1);
    this.date.setFullYear(this.date.getFullYear() + num);
    let lastDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    if(lastDate > curDate) this.date.setDate(curDate);
    else this.date.setDate(lastDate);
    if(!$(this.refDate).is(':hidden')) {
      this.updateDate(this.date);
    } else if(!$(this.refMonth).is(':hidden')) {
      $($(this.refMonth).find('.xo-date-picker-header span')[1]).text(this.date.getFullYear());
    } else {
      this.showYear(e);
    }

    this.props.onHandleClick(e, false);
  }

  nowDate(e) {
    this.setData();
    this.updateDate(this.data);
    this.props.onHandleClick(e, true);
  }

  showMonth(e) {
    $(this.refDate).hide();
    $(this.refMonth).show();
    let month = this.date.getMonth();
    $($(this.refMonth).find('.xo-date-picker-header span')[1]).text(this.date.getFullYear());
    $(this.refMonth).find('td a').removeClass('xo-active');
    $($(this.refMonth).find('td a')[month]).addClass('xo-active');
    this.props.onHandleClick(e, false);
  }

  onMonthClick(e, month) {
    $(this.refMonth).hide();
    $(this.refDate).show();
    this.changeMonth(e, month - 1 - this.date.getMonth());
    this.props.onHandleClick(e, false);
  }

  showYear(e) {
    $(this.refDate).hide();
    $(this.refMonth).hide();
    $(this.refYear).show();
    let year = this.date.getFullYear();
    let i = year - year % 10 - 1;
    let j = year + (10 - year % 10);
    $($(this.refYear).find('.xo-date-picker-header span')[1]).text(`${i+1}-${j-1}`);
    let trList = [];
    let yearList = [];
    let yearIndex = 0;
    do {
      let activeClass = '';
      let otherClass = '';
      if(i == year) activeClass = 'xo-active';
      if(yearIndex == 0 || i == j) otherClass = 'xo-other';
      let td = <td key={`${i}`}><a className={`${activeClass} ${otherClass}`} onClick={(e) => this.onYearClick(e)}>{i}</a></td>;
      yearList.push(td);
      yearIndex++;
      i++;
      if(yearIndex % 3 == 0) {
        let _yearList = yearList;
        trList.push(<tr key={yearIndex}>{_yearList}</tr>);
        yearList = [];
      }
    } while (i <= j)
    ReactDOM.render(<tbody>{trList}</tbody>, $(this.refYear).find('table')[0]);
    this.props.onHandleClick(e, false);
  }

  onYearClick(e) {
    this.date.setFullYear(super.findReactDOMNode(e, 'td').key);
    $(this.refYear).hide();
    this.showMonth(e);
    this.props.onHandleClick(e, false);
  }

}
