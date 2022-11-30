import './styles.css'

//  name :string
//  defaultValue:string
//  options :[{value:string , label:string}]
//label:string

export const Select = ({
    name,
    defaultValue,
    options,
    label
}) => {


    return (
        <>
            <label htmlFor="">{label}</label>

            <select name={name} id="" defaultValue={defaultValue} className='select-input'>
                {options.map((option, index) => {
                    return <option value={option.value} key={index}>{option.label}</option>
                })}
            </select>
        </>
    )
}