/**
 * This file work as store
 */
const redux = require("redux");
const reducer = require("./userInfo.reducer");

const store = redux.createStore(reducer);
store.subscribe(()=> console.log(store.getState()));

module.exports = store;
