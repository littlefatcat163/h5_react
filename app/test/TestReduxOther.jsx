import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Button from '../component/input/Button'
import Input from '../component/input/Input'

const increaseAction = { type: 'increase' }
const addTodo = (text) => {
  return {
    type: 'addTodo',
    text
  }
}

function counter(state = { count: 0, inputValue: '' }, action) {
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

const store = createStore(counter)

export default class TestReduxOther extends React.Component {

  unsubscribe = null

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = store.getState();
  }

  render() {
    return(
      <div>
        <div className='xo-margin-bottom-xs'>
          <span className='xo-margin-right-xs'>{this.state.count}</span>
          <Button onClick={() => store.dispatch(increaseAction)}>Increase</Button>
        </div>
        <div>
          <Input className='xo-margin-right-xs' value='test' ref={(input) => this.refInput = input}/>
          <Button onClick={(btn) => store.dispatch(addTodo(this.refInput.getValue()))}>addTodo</Button>
          <span className='xo-margin-left-xs'>{this.state.inputValue}</span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => { this.setState(store.getState()) });
    store.dispatch(addTodo(this.refInput.getValue()));
    store.dispatch(increaseAction);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

}
