import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { getTransitionEndevName } from "./tool/_xAnimation";

export default class Home extends React.Component {

  __transitionEndevName = null;

  __height = null;

  $collapse = null;

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <nav className="navbar bg-light-black font-white navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
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
        <div className="pos-relative bg-white" style={{height : 700, top : 50}}>
          <div className="container">
            <ul>
              <li><div><a>UI</a></div></li>
              <li><div><a>输入</a></div></li>
              <li><div><a>API</a></div></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.$collapse = $(ReactDOM.findDOMNode(this)).find(".navbar-collapse");
    this.__transitionEndevName = getTransitionEndevName(this.$collapse[0]);
    this.$collapse[0].addEventListener(this.__transitionEndevName, (e) => this.__transitionEnd(e));
  }

  __transitionEnd(e) {
    $(e.target).removeClass("collapsing");
    this.$collapse.height("");
  }

  componentWillUnmount() {
    this.$collapse[0].removeEventListener(this.__transitionEndevName, this.__transitionEnd);
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
