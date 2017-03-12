import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

export default class BaseComponent extends React.Component {

  $dom = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $dom = $(ReactDOM.findDOMNode(this));
  }

  hide() {
    if($dom) $dom.hide();
  }

  show() {
    if($dom) $dom.show();
  }

}
