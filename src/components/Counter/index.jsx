import { CounterContextProvider } from "../../context/providers/CounterContextProvider"
import { Actions } from "./Actions"
import { Result } from "./Result"
import './styles.css'

export const Counter = () => {

    return (
        <CounterContextProvider >
            <div className="counter-wrapper">
                <Actions />
                <Result />
            </div>
        </CounterContextProvider>
    )
}