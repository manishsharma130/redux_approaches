/**
 * This is async middleware like we have thunk middleware
 * we need to understand how it is async in nature becoz
 * this way we are providing dispatch's references to action
 * if it is function so that user (developer) can dispatch
 * action when some required processing process has been done,
 * so this is how it is async in nature becoz we cna perform
 * all action when we want.
 */

const thunkMiddleware = storeAPI => next =>  action => {
    if(typeof action === "function"){
     return action(storeAPI.dispatch,storeAPI.getState);
    }   
 return next(action);
};

module.exports = { thunkMiddleware };