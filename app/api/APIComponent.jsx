import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './api.scss'
import xoSystem from '../tool/_xoSystem'

const __noticeRenderRate = Symbol(`__noticeRenderRate`)
const __rate = Symbol(`__rate`)
const __initLoadDOM = Symbol(`__initLoadDOM`)

export default class APIComponent extends React.Component {

  __thisDom = null;
  __leftTarget = null;
  __rightToggle = null;
  __cutoverEvent = null;
  __cutoverEventNum = 0;
  __scrollEventNum = 0;
  __bodyTag = `html`;
  [__rate] = 0;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="xo-container xo-font-xs" ref={(thisDom) => this.__thisDom = thisDom}>
        <div className="xo-col-lg-12">
          <div className="xo-row">
            <div className="xo-api-left" ref={(leftTarget) => this.__leftTarget = leftTarget}>
            </div>
            <div className="xo-api-right" ref={(rightToggle) => this.__rightToggle = rightToggle}>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderNavHead() {
    if(this.props.routeParams.id) {
      return (
        <div className="xo-col-lg-12">
          <a className="xo-link" href="#/home">首页</a>
          <a className="xo-text-default xo-split-left-tilt"></a>
          <a className="xo-text-default">{this.props.routeParams.name}</a>
        </div>
      )
    }
  }

  renderLeftDOM() {
    console.error(`Please rewrite the renderLeftDOM function -> \n` +
                  `   renderLeftDOM() { \n` +
                  `     return (\n`+
                  `       <div className='xo-api-left-list'>\n` +
                  `         <h3>test</h3>\n` +
                  `         <ul>\n` +
                  `           <li data-target="_target">toTargetToggle</li>\n` +
                  `         </u>\n` +
                  `       </div>\n` +
                  `     )\n` +
                  `   }`
                );
  }

  renderRightDOM() {
    console.error(`Please rewrite the renderRightDOM function-> \n` +
                  `   renderRightDOM() { \n` +
                  `     return (\n` +
                  `       <div>\n` +
                  `         <div className="xo-row xo-margin-bottom-md" data-toggle="_target">\n` +
                  `           <div className="xo-col-lg-12 xo-api-right-toggle">\n` +
                  `             <h1>test</h1>\n` +
                  `           </div>\n` +
                  `         </div>\n` +
                  `       </div> \n` +
                  `     )\n` +
                  `   }`
                 );
  }

  componentDidMount() {
    this[__initLoadDOM]();
  }

  componentWillUnmount() {
    this.__removeListenerEvent();
  }

  [__initLoadDOM]() {
    this[__noticeRenderRate](1);
    setTimeout(() => {
      ReactDOM.render(this.renderLeftDOM(), this.__leftTarget);
      this[__noticeRenderRate](39);

      setTimeout(() => {
        ReactDOM.render(this.renderRightDOM(), this.__rightToggle);
        this[__noticeRenderRate](50);

        setTimeout(() => {
          this.__addListenerEvent();
          this[__noticeRenderRate](10);
        }, 100);

      }, 100);

    }, 100);

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

    if(xoSystem.isWebkit()) _this.__bodyTag = "body";

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
        if($(_this.__bodyTag).scrollTop() + $(window).height() == $(_this.__bodyTag)[0].scrollHeight) {
          $curToggle = $($($toggleList).last());
        } else if($(_this.__bodyTag).scrollTop() == 0) {
          $curToggle = $($($toggleList).first());
        } else {
          let scrollTop = $(_this.__bodyTag).scrollTop() + $(_this.__thisDom).parent().offset().top;
          $.each($toggleList, function(index, toggle) {
            if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return false;
            if(scrollTop >= toggle.offsetTop && scrollTop <= toggle.offsetTop + $(toggle).height()) {
              $curToggle = $(toggle);
              return false;
            }
          });
        }

        if($curToggle) {

          $(_this.__rightToggle).find("[data-toggle]").children().removeClass("active");
          $curToggle.children().addClass("active");
          $(_this.__leftTarget).find("[data-target]").removeClass("active");
          var $target = $(_this.__leftTarget).find("[data-target='" + $curToggle.attr("data-toggle") + "']");
          $target.addClass("active");
          if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return false;

          if(_this.__leftTarget.scrollHeight <= _this.__leftTarget.offsetHeight) return;
          // let difHeight = $target.outerHeight();
          //
          // $.each($target.prevAll(), function(index, prev) {
          //   if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return false;
          //   difHeight += prev.offsetHeight;
          // });
          //
          // if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return;
          // $.each($target.parent().prevAll(), function(index, prev) {
          //   if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return false;
          //   difHeight += prev.offsetHeight + 10;
          // });
          // if(_this.__cutoverEvent || currentScrollEventNum != _this.__scrollEventNum) return;
          //
          // if(difHeight > _this.__leftTarget.offsetHeight) {
          //   if($target.position().top + $target.height() > _this.__leftTarget.offsetHeight) $(_this.__leftTarget).scrollTop(difHeight - _this.__leftTarget.offsetHeight + 2);
          // } else if(difHeight < _this.__leftTarget.offsetHeight) {
          //   if($target.position().top < 0) $(_this.__leftTarget).scrollTop(0);
          // }
          if($target.position().top + $target.height() > _this.__leftTarget.offsetHeight){
            $(_this.__leftTarget).scrollTop($target.position().top + $target.height() + 16 - $(_this.__leftTarget).children().first().position().top - _this.__leftTarget.offsetHeight);
          } else if($target.position().top < 0) $(_this.__leftTarget).scrollTop(0);
        }
      }
    }, 5);
  }

  [__noticeRenderRate](rate = 0) {
    if(this[__rate] > 100) return;
    this[__rate] += rate;
    if(this.props.renderRate && this.props.renderRate instanceof Function) this.props.renderRate(this[__rate]);
  }

}

APIComponent.propTypes = {

  renderRate: React.PropTypes.func

}

APIComponent.defaultProps = {

  renderRate: null

}
