import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import "./scrollbar.scss";

const __scrollInterval = Symbol("__scrollInterval");

export default class ScrollBar extends React.Component {

  displayName = "ScrollBar";

  $container = null;

  $content = null;

  $children = null;

  $vertical = null;

  $horizontal = null;

  range = {

    barOffsetTop        : null,

    barOffsetBottom     : null,

    barOffsetLeft       : null,

    barOffsetRight      : null,

    contentOffsetBottom : null,

    contentOffsetTop    : null,

    contentOffsetLeft   : null,

    contentOffsetRight  : null,

    verticalAxi         : null,

    horizontalAxi       : null,

    childrenHeight      : null,

    childrenWidth       : null,

    space               : 1,

    size                : 5
  };

  constructor(props) {
    super(props);
    this.$container = null;
    this.$content = null;
    this.$vertical = null;

    if(this.props.size < 5) this.range.size = 5;
    else if(this.props.size > 25) this.range.size = 25;
    else this.range.size = this.props.size;
  }

  render() {
    return(
      <div className="auto-parent">
        <div className="scrollbar-container">
          <div className="scrollbar-content">
            <div className="scrollbar-children">
              {this.props.children}
            </div>
          </div>
          <div className="scrollbar-vertical" style={{display : "none"}}>
            <div className="scrollbar-back"></div>
            <div className="scrollbar"></div>
          </div>
          <div className="scrollbar-horizontal" style={{display : "none"}}>
            <div className="scrollbar-back"></div>
            <div className="scrollbar"></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$container   = $(ReactDOM.findDOMNode(this));
    this.$content     = this.$container.find(".scrollbar-content");
    this.$children    = this.$content.children();
    this.$vertical    = this.$container.find(".scrollbar-vertical");
    this.$horizontal  = this.$container.find(".scrollbar-horizontal");

    this.$vertical.width(this.range.size);
    this.$horizontal.height(this.range.size);

    this.resize();
    this[__scrollInterval] = setInterval(() => this.resizeScroller(), 200);
  }

  //调整
  resize() {

    this.$content.height(this.$container.height() - this.range.size);
    this.$content.width(this.$container.width() - this.range.size);
    this.$vertical.height(this.$content.height());
    this.$horizontal.width(this.$content.width());

  }

  componentWillUnmount() {
    clearInterval(this[__scrollInterval]);
    this.unbindVerticalBarListener();
    this.unbindVerticalBarListener();
    this.unbindMouseWheel();
  }

  //调整滚动条
  resizeScroller() {

    let bindmousewheel = false;

    //判断垂直滚动条
    if(this.$children.height() > this.$vertical.height()){
      if(this.range.childrenHeight != this.$children.height()){
        this.range.childrenHeight = this.$children.height();
        this.$vertical.show();
        this.resizeVerticalBar();
        this.unbindVerticalBarListener();
        this.bindVerticalBarListener();
        bindmousewheel = true;
      }
    } else {
      this.$vertical.hide();
    }

    //判断水平滚动条
    if(this.$children.width() > this.$horizontal.width()){
      if(this.range.childrenWidth != this.$children.width()){
        this.range.childrenWidth = this.$children.width();
        this.$horizontal.show();
        this.resizeHorizontalBar();
        this.unbindVerticalBarListener();
        this.bindVerticalBarListener();
        bindmousewheel = true;
      }
    } else {
      this.$horizontal.hide();
    }

    if(bindmousewheel){
      this.unbindMouseWheel();
      this.bindMouseWheel();
    }
  }

  //调整垂直块
  resizeVerticalBar() {
    const barH = this.$vertical.height() / (this.range.childrenHeight / this.$vertical.height());
    this.range.verticalAxi = (this.range.childrenHeight - this.$vertical.height()) / (this.$vertical.height() - barH);
    this.$vertical.find(".scrollbar").height(barH);
    this.range.barOffsetTop = 0;
    this.range.barOffsetBottom = this.$vertical.height() - barH;
    this.range.contentOffsetBottom = 0;
    this.range.contentOffsetTop = - this.$children.height() + this.$vertical.height();
  }

  //调整水平块
  resizeHorizontalBar() {
    const barW = this.$horizontal.width() / (this.range.childrenWidth / this.$horizontal.width());
    this.range.horizontalAxi = (this.range.childrenWidth - this.$horizontal.width()) / (this.$horizontal.width() - barW);
    this.$horizontal.find(".scrollbar").width(barW);
    this.range.barOffsetLeft = 0;
    this.range.barOffsetRight = this.$horizontal.width() - barW;
    this.range.contentOffsetRight = 0;
    this.range.contentOffsetLeft = - this.$children.width() + this.$horizontal.width();
  }

  //绑定垂直滚动条事件
  bindVerticalBarListener() {
    this.$vertical.find(".scrollbar").bind("mousedown", function(e) {
      let disY = e.clientY - this.range.barOffsetTop;
      const maxHeight = this.$vertical.height() - $(e.target).height();
      $(e.target).bind("mousemove", function(e) {
        this.range.barOffsetTop = e.clientY - disY;
        this.moveVertical();
      }.bind(this));
      $(e.target).bind("mouseup", function(e) {
        $(e.target).unbind("mousemove");
      });
    }.bind(this));
    this.$vertical.find(".scrollbar").bind("mouseout", function(e) {
      $(e.target).unbind("mousemove");
      $(e.target).unbind("mouseup");
    });
  }

  //绑定水平滚动条事件
  bindVerticalBarListener() {
    this.$horizontal.find(".scrollbar").bind("mousedown", function(e) {
      let disX = e.clientX - this.range.barOffsetLeft;
      const maxWidth = this.$horizontal.width() - $(e.target).width();
      $(e.target).bind("mousemove", function(e) {
        this.range.barOffsetLeft = e.clientX - disX;
        this.moveHorizontal();
      }.bind(this));
      $(e.target).bind("mouseup", function(e) {
        $(e.target).unbind("mousemove");
      });
    }.bind(this));
    this.$horizontal.find(".scrollbar").bind("mouseout", function(e) {
      $(e.target).unbind("mousemove");
      $(e.target).unbind("mouseup");
    });
  }

  //绑定滚轮事件
  bindMouseWheel() {
    this.$container.bind("mousewheel", function(e) {

      if(!this.$vertical.is(":hidden")) {
        let contentTop = Number.parseFloat(this.$children.css("top")) - e.originalEvent.deltaY;
        this.range.barOffsetTop = - contentTop / this.range.verticalAxi;

        if(contentTop >= this.range.contentOffsetBottom) contentTop = this.range.contentOffsetBottom;
        else if(contentTop <= this.range.contentOffsetTop) contentTop = this.range.contentOffsetTop;
        this.$children.css({"top" : contentTop});

        if(this.range.barOffsetTop <= 0) this.range.barOffsetTop = 0;
        else if(this.range.barOffsetTop >= this.range.barOffsetBottom) this.range.barOffsetTop = this.range.barOffsetBottom;
        this.$vertical.find(".scrollbar").css({"top" : this.range.barOffsetTop});
      } else {
        let contentLeft = Number.parseFloat(this.$children.css("left")) - e.originalEvent.deltaY;
        this.range.barOffsetLeft = - contentLeft / this.range.horizontalAxi;

        if(contentLeft >= this.range.contentOffsetRight) contentLeft = this.range.contentOffsetRight;
        else if(contentLeft <= this.range.contentOffsetLeft) contentLeft = this.range.contentOffsetLeft;
        this.$children.css({"left" : contentLeft});

        if(this.range.barOffsetLeft <= 0) this.range.barOffsetLeft = 0;
        else if(this.range.barOffsetLeft >= this.range.barOffsetRight) this.range.barOffsetLeft = this.range.barOffsetRight;
        this.$horizontal.find(".scrollbar").css({"left" : this.range.barOffsetLeft});
      }

      let contentLeft = Number.parseFloat(this.$children.css("left")) - e.originalEvent.deltaX;
      this.range.barOffsetLeft = - contentLeft / this.range.horizontalAxi;

      if(contentLeft >= this.range.contentOffsetRight) contentLeft = this.range.contentOffsetRight;
      else if(contentLeft <= this.range.contentOffsetLeft) contentLeft = this.range.contentOffsetLeft;
      this.$children.css({"left" : contentLeft});

      if(this.range.barOffsetLeft <= 0) this.range.barOffsetLeft = 0;
      else if(this.range.barOffsetLeft >= this.range.barOffsetRight) this.range.barOffsetLeft = this.range.barOffsetRight;
      this.$horizontal.find(".scrollbar").css({"left" : this.range.barOffsetLeft});

    }.bind(this));
  }

  //垂直移动
  moveVertical() {
    if(this.range.barOffsetTop <= 0) this.range.barOffsetTop = 0;
    else if(this.range.barOffsetTop >= this.range.barOffsetBottom) this.range.barOffsetTop = this.range.barOffsetBottom;
    this.$vertical.find(".scrollbar").css({"top" : this.range.barOffsetTop});

    this.$children.css({"top" : - this.range.barOffsetTop * this.range.verticalAxi});
  }

  //水平移动
  moveHorizontal() {
    if(this.range.barOffsetLeft <= 0) this.range.barOffsetLeft = 0;
    else if(this.range.barOffsetLeft >= this.range.barOffsetRight) this.range.barOffsetLeft = this.range.barOffsetRight;
    this.$horizontal.find(".scrollbar").css({"left" : this.range.barOffsetLeft});

    this.$children.css({"left" : - this.range.barOffsetLeft * this.range.horizontalAxi});
  }

  //解除垂直滚动条绑定事件
  unbindVerticalBarListener() {
    let $verticalbar = this.$vertical.find(".scrollbar");
    $verticalbar.unbind("mousedown");
    $verticalbar.unbind("mousemove");
    $verticalbar.unbind("mouseup");
    $verticalbar.unbind("mouseout");
  }

  //解除水平滚动条绑定事件
  unbindVerticalBarListener() {
    let $horizontalbar = this.$horizontal.find(".scrollbar");
    $horizontalbar.unbind("mousedown");
    $horizontalbar.unbind("mousemove");
    $horizontalbar.unbind("mouseup");
    $horizontalbar.unbind("mouseout");
  }

  //解除鼠标滚轮绑定事件
  unbindMouseWheel() {
    this.$container.unbind("mousewheel");
  }

}

ScrollBar.defaultProps = {
  size : 10,
}

ScrollBar.propTypes = {
  size :  React.PropTypes.number
}
