/**
 *  This is implementation of enhancers for method of redux'store.
 *  So as we can see we implemented logger enhancer that is used to
 *  enhance dispatch method functionality
 */

const logger = (createStore)=>(rootReducer, preloadedState, enhancers)=>{
    const store = createStore(rootReducer, preloadedState, enhancers);
    function newDispatch(action){
      console.log("Previous State:- ",store.getState());
      console.log("Action:- ",action);
      let rst = store.dispatch(action);
      console.log("New State:- ",rst);
      return rst;
    }
    return ({
        ...store, dispatch:newDispatch
    });
}

module.exports={
    logger
};