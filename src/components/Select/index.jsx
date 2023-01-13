import './styles.css'

//  name :string
//  value:string
//  options :[{value:string , label:string}]
//label:string
//onChange ::Function

export const Select = ({
    name,
    options,
    label,
    onChange,
    value
}) => {


    return (
        <>
            <label htmlFor="">{label}</label>

            <select
                name={name}
                id=""
                value={value}
                className='select-input'
                onChange={(event) => {
                    onChange(name, event.target.value)
                }}>

                {options.map((option, index) => {
                    return <option value={option.value} key={index}>{option.label}</option>
                })}

            </select>
        </>
    )
}