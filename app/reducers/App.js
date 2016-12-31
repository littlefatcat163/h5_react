import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import Bar from './Bar'

function App({number, children }) {
  console.log(number);
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '2.5em' }}>{children}</div>
      <div style={{marginTop: '1em'}}>{number}</div>
      <Bar/>
    </div>
  )
}

export default connect(
  state => ({ number: state.re.number })
)(App)
