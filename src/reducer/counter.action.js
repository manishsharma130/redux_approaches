const {INCREMENT,DECREMENT} = require("./counter.type");

module.exports = {
doIncrement : ()=>({ type:INCREMENT }),
doDecrement : ()=>({ type:DECREMENT})    
}
