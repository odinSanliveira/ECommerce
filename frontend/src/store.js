import { combineReducers, applyMiddleware } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productDetailsReducers, productListReducers } from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'

const rootReducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart : {cartItems: cartItemFromStorage}
}

const middleware= [thunk]

const store = configureStore({reducer:rootReducer}, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store