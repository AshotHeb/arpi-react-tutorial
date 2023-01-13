import LibDatePicker from 'react-datepicker'
import './styles.css'

export const DatePicker = ({
    label,
    selected,
    name,
    onChange
}) => {


    return (
        <>
            <p className='date-picker-label'>{label}</p>
            <LibDatePicker
                className={'w-100'}
                selected={selected ? selected : new Date()} // selected || new Date()
                onChange={(date) => onChange(name, date)}
            />
        </>
    )
}