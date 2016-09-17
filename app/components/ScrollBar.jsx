import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import "./scrollbar.scss";

const __scrollInterval = Symbol("__scrollInterval");

export default class ScrollBar extends React.Component {

  displayName = "ScrollBar";

  $container = null;

  $content = null;

  $vertical = null;

  range = {

    barOffsetTop        : null,

    barOffsetBottom     : null,

    contentOffsetBottom : null,

    contentOffsetTop    : null,

    verticalAxi         : null,

    contentHeight       : null,

    space               : 1,
  };

  constructor(props) {
    super(props);
    this.$container = null;
    this.$content = null;
    this.$vertical = null;
  }

  render() {
    return(
      <div className="scrollbar-container">
        <div className="scrollbar-content">
          {this.props.children}
        </div>
        <div className="scrollbar-vertical">
          <div className="scrollbar"></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$container = $(ReactDOM.findDOMNode(this));
    this.$content = this.$container.find(".scrollbar-content");
    this.$vertical = this.$container.find(".scrollbar-vertical");

    this[__scrollInterval] = setInterval(() => this.resizeScroller(), 200);
  }

  componentWillUnmount() {
    clearInterval(this[__scrollInterval]);
    this.unbindListener();
  }

  //调整滚动条
  resizeScroller() {
    if(this.$content.height() > this.$vertical.height()) {
      if(this.range.contentHeight != this.$content.height()){
        this.range.contentHeight = this.$content.height();
        this.resizeVerticalBar();
        this.unbindListener();
        this.bindListener();
      }
    }
  }

  //调整垂直块
  resizeVerticalBar() {
    const barH = this.$vertical.height() / (this.$content.height() / this.$vertical.height());
    this.range.verticalAxi = (this.$content.height() - this.$vertical.height()) / (this.$vertical.height() - barH);
    this.$vertical.find(".scrollbar").height(barH);
    this.range.barOffsetTop = this.range.space;
    this.range.barOffsetBottom = this.$vertical.height() - barH - this.range.space;
    this.range.contentOffsetBottom = 0;
    this.range.contentOffsetTop = - this.$content.height() + this.$vertical.height();
  }

  //绑定事件
  bindListener() {
    this.$vertical.find(".scrollbar").bind("mousedown", function(e){
      let disY = e.clientY - this.range.barOffsetTop;
      const maxHeight = this.$vertical.height() - $(e.target).height();
      $(e.target).bind("mousemove", function(e){
        this.range.barOffsetTop = e.clientY - disY;
        this.moveVertical();
      }.bind(this));
      $(e.target).bind("mouseup", function(e){
        $(e.target).unbind("mousemove");
      });
    }.bind(this));
    this.$vertical.find(".scrollbar").bind("mouseout", function(e){
      $(e.target).unbind("mousemove");
      $(e.target).unbind("mouseup");
    });
    this.$container.bind("mousewheel", function(e){
      let contentTop = Number.parseFloat(this.$content.css("top")) - e.originalEvent.deltaY;
      this.range.barOffsetTop = - contentTop / this.range.verticalAxi;

      if(contentTop >= this.range.contentOffsetBottom) contentTop = this.range.contentOffsetBottom;
      else if(contentTop <= this.range.contentOffsetTop) contentTop = this.range.contentOffsetTop;
      this.$content.css({"top" : contentTop});

      if(this.range.barOffsetTop <= this.range.space) this.range.barOffsetTop = this.range.space;
      else if(this.range.barOffsetTop >= this.range.barOffsetBottom) this.range.barOffsetTop = this.range.barOffsetBottom;
      this.$vertical.find(".scrollbar").css({"top" : this.range.barOffsetTop});
    }.bind(this));
  }

  //移动
  moveVertical() {
    if(this.range.barOffsetTop <= this.range.space) this.range.barOffsetTop = this.range.space;
    else if(this.range.barOffsetTop >= this.range.barOffsetBottom) this.range.barOffsetTop = this.range.barOffsetBottom;
    this.$vertical.find(".scrollbar").css({"top" : this.range.barOffsetTop});

    this.$content.css({"top" : - this.range.barOffsetTop * this.range.verticalAxi});
  }

  //解除绑定
  unbindListener() {
    let $verticalbar = this.$vertical.find(".scrollbar");
    $verticalbar.unbind("mousedown");
    $verticalbar.unbind("mousemove");
    $verticalbar.unbind("mouseup");
    $verticalbar.unbind("mouseout");
    this.$container.unbind("mousewheel");
  }

}
