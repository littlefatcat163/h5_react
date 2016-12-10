import React from "react";
import $ from "jquery";
import "./api.scss";

export default class APIComponent extends React.Component {

  __thisDom = null;
  __leftTarget = null;
  __rightToggle = null;
  __cutoverEvent = null;

  constructor(props) {
    super(props);
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

  componentDidMount() {
    this.__addListenerEvent();
  }

  componentWillUnmount() {
    this.__removeListenerEvent();
  }

  __addListenerEvent() {

    let _this = this;
    if(!_this.__leftTarget) console.error("please set __leftTarget with render function! see {(ref) => this.__leftTarget = ref}");
    if(!_this.__rightToggle) console.error("please set __rightToggle with render function! see {(ref) => this.__rightToggle = ref}");

    $(_this.__leftTarget).find("[data-target]").click(function() {
      _this.__cutoverEvent = "click";
      $(_this.__leftTarget).find("[data-target]").removeClass("active");
      $(this).addClass("active");
      $(_this.__rightToggle).find("[data-toggle]").children().removeClass("active");
      $(_this.__rightToggle).find("[data-toggle='" + $(this).attr("data-target") + "']").children().addClass("active");
      $("html,body").animate(
        {"scrollTop":$("[data-toggle='" + $(this).attr("data-target") + "']").offset().top - $(_this.__thisDom).parent().offset().top},
        "slow",
        //null,
        function(e) {
          console.log($(this))
        }
      );
    });

    $($(_this.__leftTarget).find("[data-target]")[0]).click();

    //$(window).bind("scroll", this.__windowScroll);
  }

  __removeListenerEvent() {
    $(window).unbind("scroll", this.__windowScroll);
  }

  __windowScroll = () => this.__scroll();

  __scroll() {
    let $toggleList = $(this.__rightToggle).find("[data-toggle]");
    let $curToggle = null;
    let scrollTop = $("body").scrollTop();// + $(this.__thisDom).parent().offset().top;
    $.each($toggleList, function(index, toggle) {
      //let lax = (toggle.offsetTop - 94 + $(toggle).height()) / document.body.clientHeight;
      //lax = lax * (document.body.clientHeight - window.innerHeight + 94);
      if(scrollTop <= toggle.offsetTop) {
        $curToggle = $(toggle);
        return false;
      }
    });
    if($curToggle) {
      $(this.__rightToggle).find("[data-toggle]").children().removeClass("active");
      $curToggle.children().addClass("active");
      $(this.__leftTarget).find("[data-target]").removeClass("active");
      $(this.__leftTarget).find("[data-target='" + $curToggle.attr("data-toggle") + "']").addClass("active");
    }
  }

}
