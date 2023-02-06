import { useContext } from "react"
import { MirrorInputContext } from "../../../context"

export const Input = () => {
    const { setInputValue } = useContext(MirrorInputContext)

    return (
        <input type="text" onChange={(event) => setInputValue(event.target.value)} />
    )
}