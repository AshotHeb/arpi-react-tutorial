/*
Action

action = {
    type:'ADD_NEW_TEXT',
    payload:'Barev'
}

action1 = {
    type:'CLEAR_TEXTS_LIST'
}
*/

/*
State = {
    textsList:[],
    ...
}
*/

export const textsListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_TEXT":
            const newText = action.payload
            return {
                ...state,
                textsList: [...state.textsList, {
                    text: newText,
                    id: Math.random()
                }]
            }
        case "CLEAR_TEXTS_LIST":
            return {
                ...state,
                textsList: []
            }
        default: return state
    }

}