/**
 * Using this "createReducer" we can perform global clearance logic here by returing initial state directly
 */

const createReducer = (initialState,actionHandler)=>{
    return ((state=initialState,action)=>{
       if(actionHandler.hasOwnProperty(action.type))
           return actionHandler[action.type](state,action)
       else
           return state;
    });
}
module.exports = {
    createReducer
}