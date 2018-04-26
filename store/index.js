import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initialState, reducer } from './reducer'

const bindMiddleware = (middleware) => {
  const dev = process.env.NODE_ENV !== 'production'
  const applied = applyMiddleware(middleware)

  if (dev) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applied)
  }

  return applied
}

export const initStore = (state = initialState) => {
  return createStore(reducer, state, bindMiddleware(thunkMiddleware))
}
