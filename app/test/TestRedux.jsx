import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Button from '../component/input/Button'
import Input from '../component/input/Input'

class Redux extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncreaseClick, inputValue, onAddTodo } = this.props;
    return(
      <div>
        <div className='xo-margin-bottom-xs'>
          <span className='xo-margin-right-xs'>{value}</span>
          <Button onClick={onIncreaseClick}>Increase</Button>
        </div>
        <div>
          <Input className='xo-margin-right-xs' value='test' ref={(input) => this.refInput = input}/>
          <Button onClick={(btn) => onAddTodo(this.refInput.getValue())}>addTodo</Button>
          <span className='xo-margin-left-xs'>{inputValue}</span>
        </div>
      </div>
    )
  }

}

// Action
const increaseAction = { type: 'increase' }
const addTodo = (text) => {
  return {
    type: 'addTodo',
    text
  }
}

// Reducer
function counter(state = { count: 0, inputValue: 'test' }, action) {
  const { count, inputValue } = state
  switch (action.type) {
    case 'increase':
      return { count: count + 1, inputValue: inputValue }
    case 'addTodo':
      return { count: count, inputValue: action.text }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

function mapStateToProps(state) {
  return {
    value: state.count,
    inputValue: state.inputValue
  }
}

function mapDispathToProps(dispatch) {
  return {
    onIncreaseClick : () => dispatch(increaseAction),
    onAddTodo: (text) => dispatch(addTodo(text))
  }
}

const Comp = connect(
  mapStateToProps,
  mapDispathToProps
)(Redux)

const TestRedux = () => {
  return (
    <Provider store={store}>
      <Comp/>
    </Provider>
  )
}

export default TestRedux
