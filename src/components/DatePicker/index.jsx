import LibDatePicker from 'react-datepicker'
import './styles.css'

export const DatePicker = ({
    label
}) => {
    return (
        <>
            <p className='date-picker-label'>{label}</p>
            <LibDatePicker className={'w-100'} />
        </>
    )
}