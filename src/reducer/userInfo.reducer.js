const actiontypes = require("./userInfo.types");
const redux = require("redux");

/**
 * 
 * In order to clear reducer that is divided into multiple section 
 * so we need to keep one reset kind type in each and every
 * divided reducer.
 * 
 */

function userInfoNameReducer(state={},action={}){
   switch(action.type){
     case actiontypes.SET_USER_NAME:
      return (action.data||"");
     case actiontypes.SET_USER_RESET:
      return ("");
     default:
      return (state);    
  }
}

function userInfoEmailReducer(state={},action={}){
    switch(action.type){
        case actiontypes.SET_USER_EMAIL:
         return (action.data||"");
        case actiontypes.SET_USER_RESET:
         return ("");
        default:
         return (state);    
     }
}

function userInfoAddressReducer(state={},action={}){
    switch(action.type){
        case actiontypes.SET_USER_ADDRESS:
         return (action.data||"");
        case actiontypes.SET_USER_RESET:
         return ("");
        default:
         return (state);    
     }
}


/**
 * As We can see below code we devide the reuder into samll piece in order to make scalable
 */
// module.exports = (state={},action={})=>{
//     return ({
//         userName:userInfoNameReducer(state?.userName||"",action),
//         userAddress:userInfoAddressReducer(state?.userAddress||"",action),
//         userEmail:userInfoEmailReducer(state?.userEmail||"",action)
//     });
// }

/**
 * As we can see above code the same redux provide utility for this ,
 * this is nothing but combineReducer
 */
module.exports = redux.combineReducers({
    userName:userInfoNameReducer,
    userAddress:userInfoAddressReducer,
    userEmail:userInfoEmailReducer
});
