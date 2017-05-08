import React from 'react'
import ReactDOM from 'react-dom'

import './code.scss'

export default class Code extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(<div className='xo-code'></div>)
  }

  componentDidMount() {
    let children = this.props.children;
    if(children) {
      let trs = [];
      if(typeof children == 'string') {
        let rows = children.split('\n');
        rows.forEach(function(row, index) {
          let ltd = <td className='xo-code-num' data-line-number={ index + 1 }></td>;
          let cols = row.split(' ');
          let spans = [];
          cols.forEach(function(col, _index) {
            spans.push(<span key={_index}>{ '  ' + col }</span>);
          });
          trs.push(
            <tr key={'data-line-number'+index}>
            { ltd }
            <td className='xo-code-content'><div>{ spans }</div></td>
            </tr>
          );
        });
      }

      ReactDOM.render(<table className='xo-code-table'><tbody>{ trs }</tbody></table>, ReactDOM.findDOMNode(this));
    }
  }

}
