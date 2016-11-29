import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { createStore } from 'redux'
import { Provider, connect } from "react-redux";
import { getTransitionEndevName } from "./tool/_xAnimation";

export default class Home extends React.Component {

  __transitionEndevName = null;

  __height = null;

  $collapse = null;
  $nav = null;
  $navIndex = null;
  $navContent = null;

  __navUlList = null;

  constructor(props) {
    super(props);
    this.__initData();
  }

  render() {
    return(
      <div>
        <nav ref={(nav) => this.$nav = $(nav)} className="x-navbar x-bg-light-black x-font-white x-navbar-fixed-top">
          <div className="x-container">
            <div className="x-navbar-header border-gray">
              <a className="x-navbar-brand" href="/">React实践</a>
              <button className="x-navbar-toggle" onClick={(e) => this.__collapse(e)}>
                <span className="fa fa-navicon"></span>
              </button>
            </div>
            <div className="x-navbar-collapse">
              <ul className="x-nav x-navbar-nav">
                <li><a>环境搭建</a></li>
                <li><a>相关说明</a></li>
                <li>
                  <a target="_blank" href="https://github.com/theMxb/h5_react">
                    <i className="fa fa-github x-margin-right-xs"></i>
                    github
                  </a>
                </li>
              </ul>
              <ul className="x-nav x-navbar-nav x-navbar-right">
                <li>
                  <a target="_blank" href="http://write.blog.csdn.net/postlist?ticket=ST-351554-7GS3jGKRbiI3DdEKyfzY-passport.csdn.net">
                    <i className="fa fa-weibo x-margin-right-xs"></i>
                    博客
                  </a>
                </li>
                <li className="x-font-ls"><a className="fa fa-user-o"></a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="bg-black font-white pos-fixed">
          <div className="container" style={{height : 280}}>
            <div className="horizontal horizontal-v">
              <div className="vertical">
                <h1>Look For Less, Do More</h1>
                <p>lern react, react with jquery build up compoonent, for reference only!</p>
                <span>
                  <input type="text"/>
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="x-nav-index" ref={(navIndex) => this.$navIndex = $(navIndex)}>
          <div className="x-container">
            <ul className="x-nav-ul">
              {
                (function(_this){
                  let _list = [];
                  _this.__navUlList.forEach(function(_navLi, index) {
                    _list.push(
                      <li key={_navLi.key} className="x-nav-container" onMouseEnter={(e) => _this.__blurContent(true)} onMouseLeave={(e) => _this.__blurContent(false)}>
                        <a>
                          <i className={_navLi.iconClass + " x-margin-right-xs"}></i>
                          {_navLi.name}
                          <i className="fa fa-angle-down x-margin-left-xs"></i>
                        </a>
                        {
                          (function(index, length) {
                            if(index < length)
                              return (
                                <span className="x-nav-split">
                                  <span className="x-nav-split-hor">
                                    <span className="x-nav-split-ver"></span>
                                  </span>
                                </span>
                              );
                          })(index, _this.__navUlList.length - 1)
                        }
                        <div className="x-nav-ream-parent">
                          <div className="x-nav-ream">
                            <div className="x-container">
                              <ul className="x-nav-ul-fluid">
                                {
                                  (function(_reamList, __this) {
                                    let __list = [];
                                    _reamList.forEach(function(_reamLi, index) {
                                      __list.push(
                                        <li key={_reamLi.key} className="x-col-xs-4">
                                          <a target={_reamLi.target}
                                             href={_reamLi.link}
                                            //  onClick={() => __this.__navLoad(_reamLi.target, _reamLi.name)}
                                             className="x-transition_border">
                                            <i className={_reamLi.iconClass + " x-margin-right-sm"}></i>
                                            {_reamLi.name}
                                          </a>
                                        </li>
                                      );
                                    });
                                    return __list;
                                  })(_navLi.reamList, _this)
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  });
                  return _list;
                })(this)
              }
            </ul>
          </div>
        </div>
        <div ref={(navContent) => this.$navContent = $(navContent)} className="x-pos-relative">
          <div className="x-container x-font-xs">
            {
              // (function(navTitle, _this){
              //   if(navTitle) {
              //     return (
              //       <div className="x-col-lg-12">
              //         <a className="x-link" onClick={() => _this.props.createNavTitle("index")}>首页</a>
              //         <a className="x-text-default x-split-left-tilt"></a>
              //         <a className="x-text-default">{navTitle}</a>
              //       </div>
              //     )
              //   }
              // })(this.props.navTitle, this)
            }
            {/* <div className="x-col-lg-3"></div>
            <div className="x-col-lg-9"></div> */}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$collapse = $(ReactDOM.findDOMNode(this)).find(".x-navbar-collapse");
    this.__transitionEndevName = getTransitionEndevName(this.$collapse[0]);
    this.$collapse[0].addEventListener(this.__transitionEndevName, (e) => this.__transitionEnd(e));
    this.$navIndex.css({"top": this.$nav.height()});
    this.$navContent.css({"top" : this.$nav.height() + this.$navIndex.height() + 10});
    $(window).bind("resize", this.__windowResize);
  }

  componentWillUnmount() {
    this.$collapse[0].removeEventListener(this.__transitionEndevName, this.__transitionEnd);
    $(window).unbind("resize", this.__windowResize);
  }

  __initData() {
    this.__navUlList = [
      {
        key : "nav_ui",
        name : "UI",
        iconClass : "fa fa-globe",
        reamList : [
          {
            key : "nav_ui_font_icon",
            name : "字体图标",
            iconClass : "fa fa-flag",
            target : "_blank",
            link : "http://fontawesome.dashgame.com/"
          },
          {
            key : "nav_ui_layout",
            name : "布局",
            iconClass : "fa fa-th-large",
            link : "#/home/123"
          },
          {
            key : "nav_ui_modial",
            name : "模态框",
            iconClass : "fa fa-window-restore"
          },
          {
            key : "nav_ui_tip",
            name : "提示框",
            iconClass : "fa fa-exclamation-triangle"
          },
          {
            key : "nav_ui_loading",
            name : "加载框",
            iconClass : "fa fa-spinner fa-pulse"
          },
          {
            key : "nav_ui_label",
            name : "标签",
            iconClass : "fa fa-bookmark"
          },
          {
            key : "nav_ui_timer_link",
            name : "时间轴",
            iconClass : "fa fa-clock-o"
          }
        ]
      },
      {
        key : "nav_input",
        name : "输入",
        iconClass : "fa fa-keyboard-o",
        reamList : [
          {
            key : "nav_input_btn",
            name : "按钮",
            iconClass : "fa fa-hand-o-down"
          },
          {
            key : "nav_input_input",
            name : "输入框",
            iconClass : "fa fa-keyboard-o"
          },
          {
            key : "nav_input_drop",
            name : "下拉框",
            iconClass : "fa fa-angle-down"
          },
          {
            key : "nav_input_checkbox",
            name : "勾选框",
            iconClass : "fa fa-check-square"
          },
          {
            key : "nav_input_radio",
            name : "单选框",
            iconClass : "fa fa-dot-circle-o"
          },
          {
            key : "nav_input_data",
            name : "日期时间",
            iconClass : "fa fa-clock-o"
          },
          {
            key : "nav_input_upload",
            name : "上传",
            iconClass : "fa fa-upload"
          }
        ]
      },
      {
        key : "nav_media",
        name : "媒体",
        iconClass : "fa fa-film",
        reamList : [
          {
            key : "nav_media_carousel",
            name : "轮播",
            iconClass : "fa fa-file-movie-o"
          },
          {
            key : "nav_media_image",
            name : "缩略图",
            iconClass : "fa fa-image"
          },
          {
            key : "nav_media_tab",
            name : "Tab",
            iconClass : "fa fa-tags"
          },
          {
            key : "nav_media_audio",
            name : "音频",
            iconClass : "fa fa-film"
          }
        ]
      },
      {
        key : "nav_chart",
        name : "图表",
        iconClass : "fa fa-bar-chart",
        reamList : [
          {
            key : "nav_chart_map",
            name : "地图",
            iconClass : "fa fa-map-marker"
          },
          {
            key : "nav_chart_chart",
            name : "统计图表",
            iconClass : "fa fa-pie-chart"
          },
          {
            key : "nav_chart_table",
            name : "表格",
            iconClass : "fa fa-table"
          },
          {
            key : "nav_chart_table_tree",
            name : "表格树",
            iconClass : "fa fa-th-list"
          }
        ]
      },
      {
        key : "nav_nav",
        name : "导航",
        iconClass : "fa fa-paper-plane-o",
        reamList : [
          {
            key : "nav_nav_bar",
            name : "导航栏",
            iconClass : "fa fa-send"
          },
          {
            key : "nav_nav_pager",
            name : "分页",
            iconClass : "fa fa-chevron-right"
          },
          {
            key : "nav_nav_tree",
            name : "树",
            iconClass : "fa fa-sitemap"
          }
        ]
      },
      {
        key : "nav_other",
        name : "其他",
        iconClass : "fa fa-ellipsis-h",
        reamList : [
          {
            key : "nav_other_transition",
            name : "过渡",
            iconClass : "fa fa-exchange"
          },
          {
            key : "nav_other_animation",
            name : "动画",
            iconClass : "fa fa-cog fa-spin"
          },
          {
            key : "nav_other_effect",
            name : "特效",
            iconClass : "fa fa-assistive-listening-systems"
          },
          {
            key : "nav_other_move",
            name : "移动",
            iconClass : "fa fa-arrows"
          },
          {
            key : "nav_other_resize",
            name : "浏览器窗口调整",
            iconClass : "fa fa-arrows-alt"
          }
        ]
      },
      {
        key : "nav_api",
        name : "API",
        iconClass : "fa fa-chain-broken",
        reamList : [
          {
            key : "nav_api_tool",
            name : "工具类",
            iconClass : "fa fa-briefcase"
          },
          {
            key : "nav_api_format",
            name : "规范",
            iconClass : "fa fa-file-code-o"
          },
          {
            key : "nav_api_html5",
            name : "html5",
            link : "http://www.jb51.net/w3school/html5/html5_reference.htm",
            target : "_blank",
            iconClass : "fa fa-html5"
          },
          {
            key : "nav_api_sass",
            name : "sass",
            link : "http://sass.bootcss.com/docs/sass-reference/",
            target : "_blank",
            iconClass : "fa fa-css3"
          },
          {
            key : "nav_api_react",
            name : "React",
            link : "http://reactjs.cn/react/index.html",
            target : "_blank",
            iconClass : "fa fa-facebook-square"
          },
          {
            key : "nav_api_react_wiki",
            name : "ReactWiki",
            link : "http://wiki.jikexueyuan.com/project/react/",
            target : "_blank",
            iconClass : "fa fa-wikipedia-w"
          },
          {
            key : "nav_api_es6",
            name : "ES6",
            link : "http://es6.ruanyifeng.com/",
            target : "_blank",
            iconClass : "fa fa-etsy"
          }
        ]
      }
    ];
  }

  __blurContent(bool) {
    if(bool) this.$navContent.addClass("x-blur-xs");
    else this.$navContent.removeClass("x-blur-xs");
  }

  __navLoad(target, name) {
    if(target === "_blank") return;
    this.props.createNavTitle(name);
  }

  __transitionEnd(e) {
    $(e.target).removeClass("collapsing");
    this.$collapse.height("");
  }

  __windowResize = () => this.__compNavIndexTop();

  __compNavIndexTop() {
    this.$navIndex.css({"top": this.$nav.height()});
  }

  __collapse(e) {
    if(!this.__height) this.__height = this.$collapse.height();
    let expand = this.$collapse.hasClass("in");
    if(this.$collapse.height() && expand ) this.$collapse.height(this.__height);
    this.$collapse.addClass("collapsing");
    if(expand) {
      this.$collapse.height(0);
      this.$collapse.removeClass("in");
    } else {
      this.$collapse.height(this.__height);
      this.$collapse.addClass("in");
    }
  }

}

// const counter = (state, action) => {
//   switch (action.type) {
//     case "createNavTitle":
//       if(action.args === "index") return {navTitle : null};
//       return {navTitle : action.args};
//       break;
//     default:
//       return {};
//   }
// }
//
// const store = createStore(counter);
//
// const actions = {
//   createNavTitle : (args) => ({type : "createNavTitle", args})
// }
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     navTitle : state.navTitle
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     createNavTitle : (args) => dispatch(actions.createNavTitle(args))
//   }
// }
//
// const ReduxHome = connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(XHome)
//
// const Home = () => {
//   return (
//     <Provider store={store}>
//       <ReduxHome/>
//     </Provider>
//   )
// }
//
// export default Home;
