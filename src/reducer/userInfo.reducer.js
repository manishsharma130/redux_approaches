const actiontypes = require("./userInfo.types");
const redux = require("redux");
const { createReducer } = require("./createReducer");

/**
 * Using this "createReducer" function we can scale each slice of reducer easily
 */


/**
 * 
 * In order to clear reducer that is divided into multiple section 
 * so we need to keep one reset kind type in each and every
 * divided reducer.
 * 
 */


const initialStateName = "";

const userInfoNameReducer = createReducer(initialStateName,{
    [actiontypes.SET_USER_NAME]:(state,action)=>{
       return (action.data||"");
    },
    [actiontypes.SET_USER_RESET]:(state,action)=>{
      return "";
    }
});

const initialStateEmail = "";
const userInfoEmailReducer = createReducer(initialStateEmail,{
    [actiontypes.SET_USER_EMAIL]:(state,action)=>{
        return (action.data||"");
    },
    [actiontypes.SET_USER_RESET]:(state,action)=>{
        return (action.data||"");
    }
});


const initialStateAddress = "";

const userInfoAddressReducer = createReducer(initialStateAddress,{
    [actiontypes.SET_USER_ADDRESS]:(state,action)=>{
        return (action.data||"");
    },
    [actiontypes.SET_USER_RESET]:(state,action)=>{
        return ("");
    }
});



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
