import { FiltersContext } from ".."


export const FiltersContextProvider = ({ children }) => {
    <FiltersContext.Provider
        value={{ arpi: 'barev' }}

    >
        {children}
    </FiltersContext.Provider >
}

