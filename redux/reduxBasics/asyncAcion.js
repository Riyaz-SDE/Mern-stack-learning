const redux = require('redux')
const axios = require('axios')
// const applyMiddleware = redux.applyMiddleware()
const thunkMiddleware = require('redux-thunk').default
const initialState = {
    loading : false,
    data:[],
    error:''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

function fetchUserSuccess(){
    return{
        type: FETCH_USERS_SUCCESS
    }
}
function fetchUserRequest(data){
    return{
        type: FETCH_USERS_REQUEST,
        payload: data
    }
}
function fetchUserFailure(error){
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
const reducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USERS_SUCCESS : return{
            ...state,
            loading: true
        }
        case FETCH_USERS_REQUEST : return{
            loading:false,
            data:action.payload,
            error:''
        }
        case FETCH_USERS_FAILURE : return{
            loading:false,
            data:[],
            error:action.payload
        }
    }
}
const fetchUser = () => {
    return function(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/posts`) 
        .then(res => {
            const users = res.data.map(e=> e.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            dispatch(fetchUserFailure(err.message))
        })
    }
}
const store =  redux.createStore(reducer,redux.applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())
// js inbuild methods video - string , array , object
// implementation of
//          stack,
//          queue(types),
//          linked list(types),
//          BS-tree with BFS & DFS,
//          heaps
//          hashmaps
// math --> array (2p,sliding window,greedy)
// string
// 
// 
// 