import { useState } from "react"
import { MirrorInputContext } from "../.."

export const MirrorInputContextProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState('')



    return <MirrorInputContext.Provider value={{
        inputValue,
        setInputValue
    }}>
        {children}
    </MirrorInputContext.Provider>
}