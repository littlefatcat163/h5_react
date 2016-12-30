import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './actions'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Some state changes:
        {console.log(this.props)}
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    )
  }

}

// function Home({ number, increase, decrease }) {
//   return (
//     <div>
//       Some state changes:
//       {number}
//       <button onClick={() => increase(1)}>Increase</button>
//       <button onClick={() => decrease(1)}>Decrease</button>
//     </div>
//   )
// }

export default connect(
  state => ({ number: state.number }),
  { increase, decrease }
)(Home)
