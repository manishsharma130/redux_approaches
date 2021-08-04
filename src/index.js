module.exports = ()=>{
    const dataHandler = require("./reducer");
    const { doIncrement , doDecrement } = require("./reducer/counter.action");
    
    dataHandler.dispatch(doIncrement());
    
    dataHandler.dispatch(doDecrement());
};