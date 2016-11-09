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
        <nav className="navbar bg-light-black font-white">
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
                  <a href="https://github.com/theMxb/h5_react">
                    <i className="fa fa-github margin-right-xs"></i>
                    github
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="http://write.blog.csdn.net/postlist?ticket=ST-351554-7GS3jGKRbiI3DdEKyfzY-passport.csdn.net">
                    <i className="fa fa-weibo margin-right-xs"></i>
                    博客
                  </a>
                </li>
                <li className="font-ls"><a className="fa fa-user-o"></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-white">
          <div className="container">
            
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
