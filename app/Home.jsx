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

  constructor(props) {
    super(props);
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
              <li className="nav-container">
                <a>
                  <i className="fa fa-globe margin-right-xs"></i>
                  UI
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="nav-ream">
                  <div className="container">
                    <ul className="nav-ul-fluid">
                      <li className="col-xs-4 transition_border"><a>字体图标</a></li>
                      <li className="col-xs-4 transition_border"><a>布局</a></li>
                      <li className="col-xs-4 transition_border"><a>调试布局</a></li>
                      <li className="col-xs-4 transition_border"><a>调试布局</a></li>
                      <li className="col-xs-4 transition_border"><a>调试布局</a></li>
                    </ul>
                  </div>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-keyboard-o margin-right-xs"></i>
                  输入
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-film margin-right-xs"></i>
                  媒体
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-bar-chart margin-right-xs"></i>
                  图表
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-paper-plane-o margin-right-xs"></i>
                  导航
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-ellipsis-h margin-right-xs"></i>
                  其他
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <span className="nav-split">
                  <span className="nav-split-hor">
                    <span className="nav-split-ver"></span>
                  </span>
                </span>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
              <li className="nav-container">
                <a>
                  <i className="fa fa-chain-broken margin-right-xs"></i>
                  API
                  <i className="fa fa-angle-down margin-left-xs"></i>
                </a>
                <div className="container nav-ream">
                  <ul>
                    <li><a>字体图标</a></li>
                    <li><a>布局</a></li>
                    <li><a></a></li>
                  </ul>
                </div>
                <span className="nav-bar"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pos-relative" style={{textAlign : "center", height : 400}}>
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
