const customMiddleware = function firstCustomMiddleware(storeAPI){
  return function wrapperDispact(next){
    return function handleaction(action){
        console.log("Custom Middleware");
        return next(action);
    }
  };
}
module.exports={
  customMiddleware
};

