import { useRef } from "react"
import "./styles.css"

export const AddTextBlock = ({
    dispatch
}) => {
    const textRef = useRef(null)

    const handleAddNewText = () => {
        const { value } = textRef.current
        dispatch({
            type: 'ADD_NEW_TEXT',
            payload: value
        })

    }
    return (
        <div className="add-text-block">
            <input type="text" ref={textRef} />
            <button className="add-text-button" onClick={handleAddNewText}>Add</button>
        </div>
    )
}