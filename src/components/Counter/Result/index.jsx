import { useContext } from "react"
import { CounterContext } from "../../../context"

export const Result = () => {
    const { counter } = useContext(CounterContext)

    return <p>{counter}</p>
}