//import creatStore which creates the store that is the result of: (root)reducer, initialState, and enhancers(middleware)
import {createStore, applyMiddleware, compose } from 'redux';
// import thunk to give access to dispatch function for async calls
import thunk from 'redux-thunk'
import rootReducer from './Reducers';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
    applyMiddleware(...middleware), 
    // enable Redux devtools in browser by checking if we have the extension then enabling it. gives it access to the app's store.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;