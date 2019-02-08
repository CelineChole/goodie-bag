import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)



const getAllCandies = () => {
  return async dispatch => {
    const response = await axios.get('/api/candies');
    const candies = response.data;
    dispatch({
      type: 'GET_ALL_CANDIES',
      candies: candies
    })
  }
}

console.log('yo from store')

const initialState = {
  candies: []
}

export const candiesSubReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAllCandies: {
      return {
        ...state,
        candies: [...state.candies, action.candies]
      }
    }
    default:
      return state
  }
}

