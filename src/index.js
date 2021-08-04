module.exports = ()=>{
    const dataHandler = require("./reducer");
    const { setUserName , setUserAddress, setUserEmail,setUserReset } = require("./reducer/userInfo.action");


    dataHandler.dispatch(setUserName("Manish Sharma"));
    dataHandler.dispatch(setUserAddress("XYZ Place Country"));
    dataHandler.dispatch(setUserEmail("rajuBro@yopmail.com"));
    console.log(dataHandler.getState());
    dataHandler.dispatch(setUserReset());
};