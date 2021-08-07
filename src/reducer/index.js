/**
 * This file work as store
 */
const redux = require("redux");
const reducer = require("./userInfo.reducer");
const { logger } = require("../enhancer/reduxLogger");

const composedEnhancer = redux.compose(logger);

/**
 * This is one way to set enhancer
 */
// const store = redux.createStore(reducer,undefined,logger);

/**
 * This is second way to set enhancer when we don't apply any preloaded state
 */
// const store = redux.createStore(reducer,logger);

/**
 * This is third way to set enhancer when we multiple enhancer
 */
 const store = redux.createStore(reducer,composedEnhancer);

store.subscribe(()=> console.log(store.getState()));

module.exports = store;
