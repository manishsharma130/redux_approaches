/**
 * This file work as store
 */
const redux = require("redux");
const reducer = require("./userInfo.reducer");
const { logger } = require("../enhancer/reduxLogger");

const { customMiddleware } = require("../enhancer/middlewareLogger");

/**
 * Here below line of code is used to add middleware
 */
const addedmiddleware = redux.applyMiddleware(customMiddleware);


/**
 * below line one code is used for adding enhancer
 */
// const composedEnhancer = redux.compose(logger);

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
//  const store = redux.createStore(reducer,composedEnhancer);


/**
 * This is the way to add middleware in store.
 * middleware is nothing but a enhancer
 */
 const store = redux.createStore(reducer,addedmiddleware);

 store.subscribe(()=> console.log(store.getState()));

module.exports = store;
