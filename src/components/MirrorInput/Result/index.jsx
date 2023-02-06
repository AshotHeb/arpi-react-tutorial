import { useContext } from "react"
import { MirrorInputContext } from "../../../context"

export const Result = () => {
    const { inputValue } = useContext(MirrorInputContext)
    return (
        <p>
            Result :: {inputValue}
        </p>
    )
}