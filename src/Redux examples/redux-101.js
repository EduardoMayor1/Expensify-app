import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    }
}

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
    }
}


const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            //This will increment by 1 by default unless a number is provided
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
});

// Subscribe - runsa function anytime the store changes 
store.subscribe(() => {
    console.log(store.getState());
})

// Action - object that gets sent to the store
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

// this is from the action generator
store.dispatch(incrementCount())


store.dispatch({type: 'DECREMENT'})

store.dispatch(decrementCount(5))

store.dispatch({type: 'RESET'})

// unsubscribe - stops running when you dont want to use the store anymore
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// })

