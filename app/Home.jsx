import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { getTransitionEndevName } from "./tool/_xAnimation";

export default class Home extends React.Component {

  __transitionEndevName = null;

  __height = null;

  $collapse = null;
  $nav = null;
  $navIndex = null;
  $content = null;

  __navUlList = null;

  constructor(props) {
    super(props);
    this.__initData();
  }

  render() {
    return(
      <div>
        <nav ref={(nav) => this.$nav = $(nav)} className="navbar bg-light-black font-white navbar-fixed-top">
          <div className="container">
            <div className="navbar-header border-gray">
              <a className="navbar-brand" href="/">React实践</a>
              <button className="navbar-toggle" onClick={(e) => this.__collapse(e)}>
                <span className="fa fa-navicon"></span>
              </button>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a>环境搭建</a></li>
                <li><a>相关软件</a></li>
                <li>
                  <a target="_blank" href="https://github.com/theMxb/h5_react">
                    <i className="fa fa-github margin-right-xs"></i>
                    github
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a target="_blank" href="http://write.blog.csdn.net/postlist?ticket=ST-351554-7GS3jGKRbiI3DdEKyfzY-passport.csdn.net">
                    <i className="fa fa-weibo margin-right-xs"></i>
                    博客
                  </a>
                </li>
                <li className="font-ls"><a className="fa fa-user-o"></a></li>
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
        <div className="nav-index" ref={(navIndex) => this.$navIndex = $(navIndex)} style={{top: 45}}>
          <div className="container">
            <ul className="nav-ul">
              {
                (function(_this){
                  let _list = [];
                  _this.__navUlList.forEach(function(_navLi, index) {
                    _list.push(
                      <li key={_navLi.key} className="nav-container" onMouseEnter={(e) => _this.__blurContent(true)} onMouseLeave={(e) => _this.__blurContent(false)}>
                        <a>
                          <i className={_navLi.iconClass + " margin-right-xs"}></i>
                          {_navLi.name}
                          <i className="fa fa-angle-down margin-left-xs"></i>
                        </a>
                        {
                          (function(index, length) {
                            if(index < length)
                              return (
                                <span className="nav-split">
                                  <span className="nav-split-hor">
                                    <span className="nav-split-ver"></span>
                                  </span>
                                </span>
                              );
                          })(index, _this.__navUlList.length - 1)
                        }
                        <div className="nav-ream-parent">
                          <div className="nav-ream">
                            <div className="container">
                              <ul className="nav-ul-fluid">
                                {
                                  (function(_reamList) {
                                    let __list = [];
                                    _reamList.forEach(function(_reamLi, index) {
                                      __list.push(
                                        <li key={_reamLi.key} className="col-xs-4">
                                          <a target={_reamLi.target} href={_reamLi.link} className="transition_border">
                                            <i className={_reamLi.iconClass + " margin-right-sm"}></i>
                                            {_reamLi.name}
                                          </a>
                                        </li>
                                      );
                                    });
                                    return __list;
                                  })(_navLi.reamList)
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
        <div ref={(content) => this.$content = $(content)} className="pos-relative" style={{textAlign : "center", height : 400}}>
          <span className="fa fa-ravelry" style={{fontSize : 100, marginTop : 200}}></span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$collapse = $(ReactDOM.findDOMNode(this)).find(".navbar-collapse");
    this.__transitionEndevName = getTransitionEndevName(this.$collapse[0]);
    this.$collapse[0].addEventListener(this.__transitionEndevName, (e) => this.__transitionEnd(e));
    this.$navIndex.css({"top": this.$nav.height()});
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
            iconClass : "fa fa-th-large"
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
            name : "导航栏"
          },
          {
            key : "nav_nav_pager",
            name : "分页"
          },
          {
            key : "nav_nav_tree",
            name : "树",
            iconClass : "fa fa-chevron-right"
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
            name : "过渡"
          },
          {
            key : "nav_other_animation",
            name : "动画"
          },
          {
            key : "nav_other_effect",
            name : "特效"
          },
          {
            key : "nav_other_move",
            name : "移动",
            iconClass : "fa fa-arrows"
          },
          {
            key : "nav_other_resize",
            name : "浏览器窗口调整"
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
            name : "工具类"
          },
          {
            key : "nav_api_format",
            name : "规范"
          },
          {
            key : "nav_api_react",
            name : "React",
            link : "http://reactjs.cn/react/index.html",
            target : "_blank"
          },
          {
            key : "nav_api_react_wiki",
            name : "ReactWiki",
            link : "http://wiki.jikexueyuan.com/project/react/",
            target : "_blank"
          },
          {
            key : "nav_api_sass",
            name : "Sass",
            link : "http://sass.bootcss.com/docs/sass-reference/",
            target : "_blank"
          },
          {
            key : "nav_api_es6",
            name : "ES6",
            link : "http://es6.ruanyifeng.com/",
            target : "_blank"
          }
        ]
      }
    ];
  }

  __blurContent(bool) {
    if(bool) this.$content.addClass("blur-xs");
    else this.$content.removeClass("blur-xs");
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
