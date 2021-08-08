module.exports = ()=>{
    const dataHandler = require("./reducer");
    const store = require("./reducer/index");
    const { setUserName , setUserAddress, setUserEmail,setUserReset } = require("./reducer/userInfo.action");


    dataHandler.dispatch(setUserName("Manish Sharma"));
    dataHandler.dispatch(setUserAddress("XYZ Place Country"));
    dataHandler.dispatch(setUserEmail("rajuBro@yopmail.com"));
    console.log(dataHandler.getState());
    dataHandler.dispatch((dispatch)=>{
    setTimeout(()=>{
        console.log("Before async operation:- ",store.getState());
        dispatch(setUserReset());
        console.log("After async operation:- ",store.getState());
    },10000);    
    console.log("Async dispatcher");
    });
};