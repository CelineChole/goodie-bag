import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


const GET_ALL_CANDIES = 'GET_ALL_CANDIES'
const GET_CANDY_BY_ID = 'GET_CANDY_BY_ID'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'

export const getAllCandies = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/candies');
    const candies = response.data;
    dispatch({
      type: GET_ALL_CANDIES,
      candies: candies
    })
  }
}

export const getCandyById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/candies/${id}`)
    const candy = response.data;
    dispatch({
      type: GET_CANDY_BY_ID,
      candy: candy
    })
  }
}

export const changeQuantity = (id, quantity) => {
  console.log(id, quantity)
  return async (dispatch) => {
    const response = await axios.put(`/api/candies/${id}`, {quantity: quantity})
    const candy = response.data;
    dispatch({
      type: CHANGE_QUANTITY,
      candy: candy
    })
  }
}

const initialState = {
  candies: [],
  candy: {},
}

export const candiesSubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES: {
      return {
        ...state,
        candies: action.candies
      }
    }
    case GET_CANDY_BY_ID: {
      return {
        ...state,
        candy: action.candy
      }
    }
    case CHANGE_QUANTITY: {
      return {
        ...state,
        candy: action.candy
      }
    }
    default:
    return state
  }
}


export default createStore(
  candiesSubReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)