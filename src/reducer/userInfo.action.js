const actiontypes = require("./userInfo.types");

module.exports = {
  setUserName:(value)=>({type:actiontypes.SET_USER_NAME,data:value}),
  setUserAddress:(value)=>({type:actiontypes.SET_USER_ADDRESS,data:value}),
  setUserEmail:(value )=>({type:actiontypes.SET_USER_EMAIL,data:value}),
  setUserReset:()=>({type:actiontypes.SET_USER_RESET}),
};