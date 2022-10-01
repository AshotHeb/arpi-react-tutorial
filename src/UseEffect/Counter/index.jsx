import { useEffect, useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Counter Mounted');
        return () => {
            console.log('Counter Will UnMounte');
        }
    }, [])

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <button onClick={() => setCounter(prev => prev - 1)}>-</button>
        </div>
    )
}