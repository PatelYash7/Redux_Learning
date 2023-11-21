const redux = require('redux');
//creating a store 
const createstore = redux.createStore
const combineReducer=redux.combineReducers


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

//Action 
// {
//     type: BUY_CAKE;
//     info: 'First Action'
// }

// Action Creater 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Action'
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'IceCream'
    }
}



//Reducer
//Function that accepts State and Action as an arguments,and returns the next state of the app.

// const initialState = {
//     numOfCakes:10,
//     numOfIceCream:15
// }

// Now we are creating Multiple Reducer to maintain multiple state easily, bcz its a good practice 
const initialCake={
    numOfCakes:10
} 
const initialIceCream={
    numOfIceCream:20
}

const cakeReducer = (state=initialCake,action) => {
    const newState={...state}
    switch(action.type){
        case BUY_CAKE: return {
            numOfCakes:newState.numOfCakes - 1,
        }
        default : return newState
    }
}
const IceCreamReducer = (state=initialIceCream,action) => {
    const newState={...state}
    switch(action.type){
        case BUY_ICECREAM: return {
            numOfIceCream:newState.numOfIceCream-1
        }
        default : return newState
    }
}
// const reducer = (state=initialState,action) => {
//     const newState={...state}
//     switch(action.type){
//         case BUY_CAKE: return {
//             numOfCakes:newState.numOfCakes - 1
//         }
//         default : return newState
//     }
// }



//Responsibilities of Redux store 

//1 it holds the application state
//2 allow access to state via getState()
//3 it allow the dispatch method to be updated via "dispatch(action)"
//4  it Registers the Listner,  with "subscribe(llistner)"
//5 it deregister the user with the function returned by subscribe(Listner) 

//calling the createStore method
//1
// const store = createstore(reducer);  // store initially hold the reducer which hold the initial state of the application.
// createstore can only accept one reducer
// now we have want to combine reducer, which can be done by CombineReducer method.

const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:IceCreamReducer
})

const store =createstore(rootReducer)

//2 
console.log('Initial state',store.getState())  // this gives Initial State of the application

//4 
// this returns the method which is used for unsubscribe 
const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState())) 


//3 

// Action is passed to Reducer with the help of Dispatcher  

store.dispatch(buyCake()) // here we are passing the Action creater which returns the action
store.dispatch(buyCake()) // here we can directly pass the Action object { }, but it is preferably to pass creator function

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())



//5
unsubscribe();