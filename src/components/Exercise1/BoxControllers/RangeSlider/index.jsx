import './styles.css'

export const RangeSlider = (props)=>{
    const {label} = props
    return (
       <div className="range-slider-wrapper">
            <input type="range" className="range-slider"/>
            <label htmlFor="" className="range-slider-label">{label}</label>
       </div>
    )
}