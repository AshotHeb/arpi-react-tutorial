import { useState } from "react"
import { CounterContext } from "../.."

export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    const plusCounter = () => {
        setCounter(prev => prev + 1)
    }

    const minusCounter = () => {
        setCounter(prev => prev - 1)
    }


    return <CounterContext.Provider value={{
        counter,
        plusCounter,
        minusCounter
    }}>
        {children}
    </CounterContext.Provider>
}