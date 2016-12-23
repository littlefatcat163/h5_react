import React from "react";
import $ from "jquery";
import "./api.scss";
import xSystem from "../tool/_xSystem";

export default class APIComponent extends React.Component {

  __thisDom = null;
  __leftTarget = null;
  __rightToggle = null;
  __cutoverEvent = null;
  __cutoverEventNum = 0;
  __scrollEventNum = 0;
  __bodyTag = "html";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="x-container x-font-xs" ref={(thisDom) => this.__thisDom = thisDom}>
        <div className="x-col-lg-12">
          <div className="x-row">
            {this.renderLeftDOM()}
            {this.renderRightDOM()}
          </div>
        </div>
      </div>
    )
  }

  renderNavHead() {
    if(this.props.routeParams.id) {
      return (
        <div className="x-col-lg-12">
          <a className="x-link" href="#/home">首页</a>
          <a className="x-text-default x-split-left-tilt"></a>
          <a className="x-text-default">{this.props.routeParams.name}</a>
        </div>
      )
    }
  }

  renderLeftDOM() {
    console.error("Please rewrite the function->renderLeftDOM(){ return <div className='x-api-left' ref={(leftTarget) => this.__leftTarget = leftTarget}></div> } !");
  }

  renderRightDOM() {
    console.error("Please rewrite the function->renderRightDOM(){ return <div className='x-api-right' ref={(rightToggle) => this.__rightToggle = rightToggle}></div> } !");
  }

  componentDidMount() {
    this.__addListenerEvent();
  }

  componentWillUnmount() {
    this.__removeListenerEvent();
  }

  __addListenerEvent() {

    let _this = this;

    if(!_this.__leftTarget) console.error("Please set __leftTarget with render function! see {(ref) => this.__leftTarget = ref}");
    if(!_this.__rightToggle) console.error("Please set __rightToggle with render function! see {(ref) => this.__rightToggle = ref}");

    if(!$(_this.__leftTarget).find("[data-target]") || $(_this.__leftTarget).find("[data-target]").length == 0)
    {
      console.warn("The left dom have not 'data-target' prop document, because [data-target] is connect to [data-toggle]!");
      return;
    }

    if(!$(_this.__rightToggle).find("[data-toggle]") || $(_this.__rightToggle).find("[data-toggle]").length == 0)
    {
      console.warn("The right dom have not 'data-toggle' prop document, because [data-toggle] is connect with [data-target]!");
      return;
    }

    if(xSystem.isWebkit()) _this.__bodyTag = "body";

    $(_this.__leftTarget).find("[data-target]").click(function() {
      _this.__cutoverEvent = "click";
      let currentCutoverEventNum = ++_this.__cutoverEventNum;
      $(_this.__leftTarget).find("[data-target]").removeClass("active");
      $(this).addClass("active");
      $(_this.__rightToggle).find("[data-toggle]").children().removeClass("active");
      $(_this.__rightToggle).find("[data-toggle='" + $(this).attr("data-target") + "']").children().addClass("active");
      $(_this.__bodyTag).animate(
        {"scrollTop":$("[data-toggle='" + $(this).attr("data-target") + "']").offset().top - $(_this.__thisDom).parent().offset().top},
        "slow",
        function(e) {
          if(currentCutoverEventNum == _this.__cutoverEventNum) _this.__cutoverEvent = null;
        }
      );
    });

    $($(_this.__leftTarget).find("[data-target]")[0]).click();

    $(window).bind("scroll", this.__windowScroll);
  }

  __removeListenerEvent() {
    $(window).unbind("scroll", this.__windowScroll);
  }

  __windowScroll = () => this.__scroll();

  __scroll() {
    let _this = this;
    if(_this.__cutoverEvent) return;
    let currentScrollEventNum = ++_this.__scrollEventNum;
    setTimeout(function() {
      if(currentScrollEventNum != _this.__scrollEventNum) return;
      if(!_this.__cutoverEvent) {
        let $toggleList = $(_this.__rightToggle).find("[data-toggle]");
        let $curToggle = null;
        let scrollTop = $(_this.__bodyTag).scrollTop() + $(_this.__thisDom).parent().offset().top;
        $.each($toggleList, function(index, toggle) {
          if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return false;
          if(scrollTop >= toggle.offsetTop && scrollTop <= toggle.offsetTop + $(toggle).height()) {
            $curToggle = $(toggle);
            return false;
          }
        });
        if($curToggle) {
          $(_this.__rightToggle).find("[data-toggle]").children().removeClass("active");
          $curToggle.children().addClass("active");
          $(_this.__leftTarget).find("[data-target]").removeClass("active");
          $(_this.__leftTarget).find("[data-target='" + $curToggle.attr("data-toggle") + "']").addClass("active");
        }
      }
    }, 5);
  }

}
