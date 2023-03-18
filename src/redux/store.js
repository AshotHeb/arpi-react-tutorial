import { createStore } from 'redux'

const defaultState = {
    counter: 0,
    inputValue: ''
}

function rootReducer(state = defaultState, action) {
    // { type: 'SET_INPUT_VALUE', payload: event.target.value }

    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT_COUNTER':
            return { ...state, counter: state.counter - 1 }
        case 'SET_INPUT_VALUE':
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}


export const store = createStore(rootReducer)