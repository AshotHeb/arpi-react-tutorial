import { MirrorInputContextProvider } from "../../context/providers/MirrorInputContextProvider"
import { Input } from "./Input"
import { Result } from "./Result"
import './styles.css'

export const MirrorInput = () => {
    return (
        <MirrorInputContextProvider>
            <div className="mirror-input-wrapper">
                <Input />
                <Result />
            </div>
        </MirrorInputContextProvider>
    )
}