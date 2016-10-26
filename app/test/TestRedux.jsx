import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider, connect } from "react-redux";

class TestRedux extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncreaseClick } = this.props;
    return(
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }

}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

function mapStateToProps(state) {
  return {
    value : state.count
  }
}

function mapDispathToProps(dispatch) {
  return {
    onIncreaseClick : () => dispatch(increaseAction)
  }
}

const Comp = connect(
  mapStateToProps,
  mapDispathToProps
)(TestRedux);

const App = () => {
  return (
    <Provider store={store}>
      <Comp/>
    </Provider>
  )
}

export default App;

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
