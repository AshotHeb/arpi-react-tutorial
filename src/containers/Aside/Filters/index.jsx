import { DatePicker } from '../../../components/DatePicker'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { SORT_SELECT_OPTIONS, STATUS_SELECT_OPTIONS } from '../../../data/filters-data'
import './styles.css'



export const Filters = () => {
    return (
        <div className='filters-section'>
            <Select
                name="status"
                defaultValue='active'
                options={STATUS_SELECT_OPTIONS}
                label='Status'
            />

            <Input type="search" placeholder={'Search'} label={'Search'} />

            <DatePicker label={'Created Little then'} />

            <DatePicker label={'Created Gratter then'} />

            <DatePicker label={'Complete Little then'} />

            <DatePicker label={'Complete Gratter then'} />

            <Select
                name="sort"
                defaultValue='a-z'
                options={SORT_SELECT_OPTIONS}
                label='Sort'

            />
        </div>
    )
}