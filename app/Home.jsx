import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { createStore } from 'redux'
//import { Provider, connect } from "react-redux";
import { getTransitionEndevName } from "./tool/_xAnimation";

const __renderChildRate = Symbol(`__renderChildRate`);

export default class Home extends React.Component {

  __transitionEndevName = null;

  __height = null;

  $collapse = null;
  $nav = null;
  $navHead = null;
  $navIndex = null;
  $navContent = null;
  $progress = null;

  __navUlList = null;

  constructor(props) {
    super(props);
    this.__initData();
  }

  render() {
    return(
      <div className="x-layout">
        <nav ref={(nav) => this.$nav = $(nav)} className="x-navbar x-bg-light-black x-font-white x-navbar-fixed-top">
          <div className="x-container">
            <div className="x-navbar-header border-gray" ref={(navHead) => this.$navHead = $(navHead)}>
              <a className="x-navbar-brand" href="/index.html">
                <img src='images/logo-3x.png'/>
                <span>XO</span>
              </a>
              <button className="x-navbar-toggle" onClick={(e) => this.__collapse(e)}>
                <span className="fa fa-navicon"></span>
              </button>
            </div>
            <div className="x-navbar-collapse">
              <ul className="x-nav x-navbar-nav">
                <li><a href="#/home/Environment/环境搭建">环境搭建</a></li>
                <li><a>相关说明</a></li>
              </ul>
              <ul className="x-nav x-navbar-nav x-navbar-right">
                <li>
                  <a target="_blank" href="https://github.com/theMxb/h5_react">
                    <i className="fa fa-github x-margin-right-xs"></i>
                    github
                  </a>
                </li>
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
        <div className="x-nav-progress" ref={(progress) => this.$progress = progress}>
          <div></div>
        </div>
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
          {
            function(_this){
              if(_this.props.children) return React.cloneElement(_this.props.children, {renderRate: (rate) => _this[__renderChildRate](rate)});
              else return <div>react <span className="fa fa-copyright"/></div>;
            }(this)
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$collapse = $(ReactDOM.findDOMNode(this)).find(".x-navbar-collapse");
    this.__transitionEndevName = getTransitionEndevName(this.$collapse[0]);
    this.$collapse[0].addEventListener(this.__transitionEndevName, (e) => this.__transitionEnd(e));
    this.$navIndex.css({"top": this.$navHead.height()});
    this.$navContent.css({"top" : this.$navHead.height() + this.$navIndex.height() + 10});
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
            link : "#/home/Layout/布局"
          },
          {
            key : "nav_ui_modial",
            name : "模态框",
            iconClass : "fa fa-window-restore",
            link : "#/home/modial/模态框"
          },
          {
            key : "nav_ui_tip",
            name : "提示框",
            iconClass : "fa fa-exclamation-triangle",
            link : "#/home/tip/提示框"
          },
          {
            key : "nav_ui_loading",
            name : "加载框",
            iconClass : "fa fa-spinner fa-pulse",
            link : "#/home/loading/加载框"
          },
          {
            key : "nav_ui_label",
            name : "标签",
            iconClass : "fa fa-bookmark",
            link : "#/home/label/标签"
          },
          {
            key : "nav_ui_timer_link",
            name : "时间轴",
            iconClass : "fa fa-clock-o",
            link : "#/home/timer-link/时间轴"
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
            iconClass : "fa fa-hand-o-down",
            link : "#/home/btn/按钮"
          },
          {
            key : "nav_input_input",
            name : "输入框",
            iconClass : "fa fa-keyboard-o",
            link : "#/home/input/输入框"
          },
          {
            key : "nav_input_select",
            name : "下拉框",
            iconClass : "fa fa-angle-down",
            link : "#/home/select/下拉框"
          },
          {
            key : "nav_input_checkbox",
            name : "勾选框",
            iconClass : "fa fa-check-square",
            link : "#/home/checkbox/勾选框"
          },
          {
            key : "nav_input_radio",
            name : "单选框",
            iconClass : "fa fa-dot-circle-o",
            link : "#/home/radio/单选框"
          },
          {
            key : "nav_input_date",
            name : "日期时间",
            iconClass : "fa fa-clock-o",
            link : "#/home/date/日期时间"
          },
          {
            key : "nav_input_upload",
            name : "上传",
            iconClass : "fa fa-upload",
            link : "#/home/upload/上传"
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
            iconClass : "fa fa-file-movie-o",
            link : "#/home/carousel/轮播"
          },
          {
            key : "nav_media_image",
            name : "缩略图",
            iconClass : "fa fa-image",
            link : "#/home/image/缩略图"
          },
          {
            key : "nav_media_tab",
            name : "Tab",
            iconClass : "fa fa-tags",
            link : "#/home/tab/Tab"
          },
          {
            key : "nav_media_audio",
            name : "音频",
            iconClass : "fa fa-film",
            link : "#/home/audio/音频"
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
            iconClass : "fa fa-map-marker",
            link : "#/home/map/图表"
          },
          {
            key : "nav_chart_chart",
            name : "统计图表",
            iconClass : "fa fa-pie-chart",
            link : "#/home/chart/统计图表"
          },
          {
            key : "nav_chart_table",
            name : "表格",
            iconClass : "fa fa-table",
            link : "#/home/table/表格"
          },
          {
            key : "nav_chart_table_tree",
            name : "表格树",
            iconClass : "fa fa-th-list",
            link : "#/home/table-tree/表格树"
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
            iconClass : "fa fa-send",
            link : "#/home/nav-bar/导航栏"
          },
          {
            key : "nav_nav_pager",
            name : "分页",
            iconClass : "fa fa-chevron-right",
            link : "#/home/pager/分页"
          },
          {
            key : "nav_nav_tree",
            name : "树",
            iconClass : "fa fa-sitemap",
            link : "#/home/tree/树"
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
            iconClass : "fa fa-exchange",
            link : "#/home/transition/过渡"
          },
          {
            key : "nav_other_animation",
            name : "动画",
            iconClass : "fa fa-cog fa-spin",
            link : "#/home/animation/动画"
          },
          {
            key : "nav_other_effect",
            name : "特效",
            iconClass : "fa fa-assistive-listening-systems",
            link : "#/home/effect/特效"
          },
          {
            key : "nav_other_move",
            name : "移动",
            iconClass : "fa fa-arrows",
            link : "#/home/move/移动"
          },
          {
            key : "nav_other_resize",
            name : "浏览器窗口调整",
            iconClass : "fa fa-arrows-alt",
            link : "#/home/resize/浏览器窗口调整"
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
            iconClass : "fa fa-briefcase",
            link : "#/home/tool/工具类"
          },
          {
            key : "nav_api_format",
            name : "规范",
            iconClass : "fa fa-file-code-o",
            link : "#/home/Format/规范"
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
    $(e.target).removeClass("x-collapsing");
    this.$collapse.height("");
  }

  __windowResize = () => this.__compNavIndexTop();

  __compNavIndexTop() {
    this.$navIndex.css({"top": this.$navHead.height()});
  }

  __collapse(e) {
    if(!this.__height) this.__height = this.$collapse.height();
    let expand = this.$collapse.hasClass("x-in");
    if(this.$collapse.height() && expand ) this.$collapse.height(this.__height);
    this.$collapse.addClass("x-collapsing");
    if(expand) {
      this.$collapse.height(0);
      this.$collapse.removeClass("x-in");
    } else {
      this.$collapse.height(this.__height);
      this.$collapse.addClass("x-in");
    }
  }

  [__renderChildRate](rate) {
    HomeProgress.load(rate);
  }

}

class XNavProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rate: 0 };
  }

  render() {
    return (
      <div className="x-nav-progress">
        <div style={{ width: `${this.state.rate}%` }}></div>
      </div>
    )
  }

  updateRate(rate) {
    this.setState({ rate: rate });
  }

}

class HomeProgress {

  static __component = null;

  static load(rate = 0) {

    if(!this.__component) {
      let div = document.createElement('div');
      document.body.appendChild(div);
      this.__component = ReactDOM.render(<XNavProgress />, div);
    }

    this.__component.updateRate(rate);

    if(rate >= 100) {
      setTimeout(() => {
        let parentNode = ReactDOM.findDOMNode(this.__component).parentNode;
        this.__component = null;
        ReactDOM.unmountComponentAtNode(parentNode);
        document.body.removeChild(parentNode);
      }, 500);

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
//     navTitle: state.navTitle,
//     children: state.children
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
