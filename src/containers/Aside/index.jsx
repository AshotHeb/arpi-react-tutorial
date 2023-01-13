import { Filters } from './Filters'
import './styles.css'

export const Aside = ({
    changeFilter,
    filterOptions,
    resetFilters
}) => {
    return (
        <aside className="project-aside">
            <Filters
                changeFilter={changeFilter}
                filterOptions={filterOptions}
                resetFilters={resetFilters}
            />
        </aside>
    )
}