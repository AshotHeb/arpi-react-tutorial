import './styles.css'

export const StyleInput = (props)=>{
    const {label} = props
    return (
        <div className="style-input-wrapper">
            <input type="number"  className="style-input"/>
            <button className="style-input-button">{label}</button>
        </div>
    )
}