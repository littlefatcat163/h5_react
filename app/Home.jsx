import React from "react";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar bg-light-black font-white">
        <div className="container">
          <div className="navbar-header font-lx"><a className="navbar-brand">React实践</a></div>
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a>li_1</a></li>
              <li><a>li_2</a></li>
              <li><a>li_3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
