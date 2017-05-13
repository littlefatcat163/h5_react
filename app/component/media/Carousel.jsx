import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'
import { getTransitionEndevName } from "../../tool/_xAnimation";
import './_carousel.scss'

const _index = Symbol(`_index`)
const _liOnClick = Symbol('_liOnClick');
const _transitionEndevName = Symbol(`_transitionEndevName`)
const _transitinEnd = Symbol(`_transitinEnd`)
const _timer = Symbol(`_timer`)
const _changeLi = Symbol(`_changeLi`)
const _cutting = Symbol(`_cutting`)

export default class Carousel extends BaseComponent {

  [_index] = 0;

  refCarcousel = null;

  _transitionEndevName = null;

  [_timer] = null;

  [_cutting] = false;

  render() {
    let lis = [];
    return (
      <div className='xo-carcousel-container'>
        <div className='xo-carcousel' ref={(refCarcousel) => this.refCarcousel = refCarcousel}>
        {
          React.Children.map(this.props.children, (child, index) => {
            if(child.type.displayName == Carousel.Item.displayName) {
              lis.push(<li key={lis.length} onClick={(e) => this[_liOnClick](e)}></li>);
              return child;
            }
          })
        }
        </div>
        <span className='xo-carcousel-left fa fa-angle-left' onClick={(e) => this.cutOver(-1)}></span>
        <span className='xo-carcousel-right fa fa-angle-right' onClick={(e) => this.cutOver(1)}></span>
        <ol className='xo-carcousel-indicators'>
          { lis }
        </ol>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    let items = $(this.refCarcousel).find('.xo-carcousel-item');
    if(items.length > 1) {
      this._transitionEndevName = getTransitionEndevName(items[0]);
      $(items[0]).nextAll().hide().css({left: '100%'});
      $(items[0]).css({left: 0});
      $.each(items, (index, item) => {
        item.addEventListener(this._transitionEndevName, this[_transitinEnd]);
      });
      this[_timer] = setTimeout(() => this[_changeLi](), 1500);
    }
    this.$dom.find('.xo-carcousel-indicators li').first().addClass('xo-active');
  }

  componentWillUnmount() {
    let items = $(this.refCarcousel).find('.xo-carcousel-item');
    $.each(items, (index, item) => {
      item.removeEventListener(this._transitionEndevName, this[_transitinEnd]);
    });
    if(this[_timer]) clearTimeout(this[_timer]);
  }

  cutOver(i) {
    if(!i) return;
    if(this[_cutting]) return;
    this[_cutting] = true;
    let items = $(this.refCarcousel).find('.xo-carcousel-item');
    if(items.length <= 1) return;
    let lastIndex = this[_index];
    this[_index] += i;
    if(this[_index] < 0) this[_index] = items.length + this[_index] % items.length;
    else if(this[_index] >= items.length) this[_index] %= items.length;
    if(i < 0) $(items[this[_index]]).css({left: '-100%'});
    else $(items[this[_index]]).css({left: '100%'});
    $(items[this[_index]]).show().css({left: 0});
    if(i > 0) $(items[lastIndex]).css({left: `-100%`});
    else $(items[lastIndex]).css({left: `100%`});

    let $activeLi = $(this.$dom.find('.xo-carcousel-indicators li')[this[_index]]);
    $activeLi.addClass('xo-active').siblings().removeClass('xo-active');
    clearTimeout(this[_timer]);
    this[_timer] = setTimeout(() => this[_changeLi](), 1500);
    this[_cutting] = false;
  }

  [_transitinEnd](e) {
    if(parseInt($(e.target).css('left'))) $(e.target).hide();
  }

  [_liOnClick](e) {
    let key = parseInt(super.findReactDOMNode(e).key);
    this.cutOver(key - this[_index]);
  }

  [_changeLi] () {
    if(this[_cutting]) return;
    this.cutOver(1);
  }

}

Carousel.Item = class Item extends BaseComponent {

  render () {
    return(
      <div className='xo-carcousel-item'>
        {this.props.children}
      </div>
    )
  }

}

Carousel.Item.displayName = 'Carousel.Item';
