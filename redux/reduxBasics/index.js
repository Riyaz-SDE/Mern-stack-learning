const redux = require('redux')
const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()
const BUY_CAKE = "BUY_CAKE"
const BUY_ICE = "BUY_ICE"

// action creater which will return (reducer function or action)
function buyCake(){
    return { 
        type: BUY_CAKE,
        info:'First Redux Action'
    }
}
function buyIce(){
    return { 
        type: BUY_ICE,
        info:'Second Redux Action'
    }
}

// reducert = ( prvState , action ) => return newState;

/** 
 * @twovalue in combined form this will increase complexity in future
 */
// const initialState = {
//     numberofCakes:10,
//     numberofIce:100
// }
const initialIceState = {
    numberofIce:100
}
const initialCakesState = {
    numberofCakes:10
}
// const reducer = (state = initialState,action) => {
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,
//             numberofCakes : state.numberofCakes - 1
//         }
//         case BUY_ICE : return{
//             ...state,
//             numberofIce : state.numberofIce - 1
//         }
//         default : return state
//     }
// }
const cakesReducer = (state = initialCakesState,action) => {
        switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numberofCakes : state.numberofCakes - 1
        }
        default : return state
    } 
}
const iceReducer = (state = initialIceState,action) => {
        switch(action.type){
        case BUY_ICE : return{
            ...state,
            numberofIce : state.numberofIce - 1
        }
        default : return state
    } 
}
const rootReducer = redux.combineReducers({
    cakes:cakesReducer,
    ice:iceReducer
})
const store = redux.createStore(rootReducer,redux.applyMiddleware(logger))
// const store = redux.createStore(reducer)
console.log("initial State", store.getState())
const unsub = store.subscribe(()=>{}); // after logger

// const unsub = store.subscribe(() => console.log('state',store.getState())); // before logger
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
unsub()
store.dispatch(buyCake());