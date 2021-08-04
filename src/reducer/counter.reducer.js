const {INCREMENT,DECREMENT} = require("./counter.type");

const INITIAL_STATE = {value:0};

module.exports =function reducer(state=INITIAL_STATE,action={}){
    switch(action.type){
        case INCREMENT:
            return ({...state,value:state.value+1});
        case DECREMENT:
            return ({...state,value:state.value-1});
        default:
         state;
    }    
};


