import { DatePicker } from '../../../components/DatePicker'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { SORT_SELECT_OPTIONS, STATUS_SELECT_OPTIONS } from '../../../data/filters-data'
import './styles.css'



export const Filters = ({
    changeFilter,
    filterOptions,
    resetFilters
}) => {
    return (
        <div className='filters-section'>
            <button onClick={resetFilters}>Clear All</button>
            <Select
                name="status"
                options={STATUS_SELECT_OPTIONS}
                label='Status'
                onChange={changeFilter}
                value={filterOptions.status}
            />

            <Input
                type="search"
                placeholder={'Search'}
                label={'Search'}
                onChange={changeFilter}
                value={filterOptions.search}
            />

            <DatePicker
                label={'Created Little then'}
                selected={filterOptions.create_lte}
                name={'create_lte'}
                onChange={changeFilter}

            />

            <DatePicker
                label={'Created Gratter then'}
                selected={filterOptions.create_gte}
                name={'create_gte'}
                onChange={changeFilter}
            />

            <DatePicker
                label={'Complete Little then'}
                selected={filterOptions.complete_lte}
                name={'complete_lte'}
                onChange={changeFilter}


            />

            <DatePicker
                label={'Complete Gratter then'}
                selected={filterOptions.complete_gte}
                name={'complete_gte'}
                onChange={changeFilter}


            />

            <Select
                name="sort"
                defaultValue='a-z'
                options={SORT_SELECT_OPTIONS}
                label='Sort'
                onChange={changeFilter}
                value={filterOptions.sort}
            />
        </div>
    )
}