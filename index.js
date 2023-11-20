const redux = require('redux');
//creating a store 
const createstore = redux.createStore


const BUY_CAKE = 'BUY_CAKE';

//Action 
{
    type: BUY_CAKE;
    info: 'First Action'
}

// Action Creater 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Action'
    }
}


//Reducer
//Function that accepts State and Action as an arguments,and returns the next state of the app.

const initialState = {
    numOfCakes:10
}

const reducer = (state=initialState,action) => {
    const newState={...state}
    switch(action.type){
        case BUY_CAKE: return {
            numOfCakes:newState.numOfCakes - 1
        }
        default : return newState
    }
    

}
//Responsibilities of Redux store 
//1 it holds the application state
//2 allow access to state via getState()
//3 it allow the dispatch method to be updated via "dispatch(action)"
//4  it Registers the Listner,  with "subscribe(llistner)"
//5 it deregister the user with the function returned by subscribe(Listner) 

//calling the createStore method
//1
const store = createstore(reducer);  // store initially hold the reducer which hold the initial state of the application.

//2 
console.log('Initial state',store.getState())  // this gives Initial State of the application

//4 
// this returns the method which is used for unsubscribe 
const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState())) 


//3 
// dispatch take the action  and pass it to reducer which updates the state 

store.dispatch(buyCake()) // here we are passing the Action creater which returns the action
store.dispatch(buyCake()) // here we can directly pass the Action object { }, but it is preferably to pass creator function
store.dispatch(buyCake())
console.log(store.getState()) 
store.dispatch(buyCake())



//5
unsubscribe();