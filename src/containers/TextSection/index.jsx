import { useReducer } from "react"
import { AddTextBlock } from "./AddTextBlock"
import { TextsList } from "./TextsList"
import './styles.css'
import { textsListReducer } from "../../reducers/textsListReducer"

const defaultState = {
    textsList: [{
        text: "First text",
        id: Math.random()
    }]
}

export const TextSection = () => {


    const [state, dispatch] = useReducer(textsListReducer, defaultState)

    return (
        <div className="text-section-container">
            <AddTextBlock dispatch={dispatch} />
            <TextsList list={state.textsList} />
        </div>
    )
}