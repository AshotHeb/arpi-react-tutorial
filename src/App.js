import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Aside } from './containers/Aside';
import { Header } from './containers/Header';
import { NotFound } from './pages/404';
import { AboutMePage } from './pages/AboutMe';
import { ContactMe } from './pages/ContactMe';
import { HomePage } from './pages/Home';
import { useNavigate } from 'react-router-dom'

const filterDefaultState = {
  status: '',
  search: '',
  create_lte: null,
  create_gte: null,
  complete_lte: null,
  complete_gte: null,
  sort: '',
}

const getActiveFilters = (allFilters) => {
  /*First variant*/
  // const activeFilters = {}

  // for (const key in allFilters) {
  //   const value = allFilters[key]

  //   if (value) {
  //     activeFilters[key] = value
  //   }

  // }

  // return activeFilters


  /* Second variant */
  const entries = Object.entries(allFilters)
  //[['status',''],['search' , ''],[]]

  const activeFilters = entries.reduce((actives, item) => {
    const [key, value] = item // ['status','']

    if (value) {
      //2022-12-12
      const newValue = value instanceof Date ? value.toISOString().slice(0, 10) : value

      actives[key] = newValue
    }

    return actives
  }, {})

  return activeFilters
}

function App() {

  const [filterOptions, setFilterOptions] = useState(filterDefaultState)

  const navigate = useNavigate()


  const changeFilter = (name, value) => {
    setFilterOptions(prev => {
      const newFiltes = {
        ...prev,
        [name]: value
      }

      /* Search Params URLSearchParams */
      const activeFilters = getActiveFilters(newFiltes)
      const searchParams = new URLSearchParams(activeFilters);
      const queryString = searchParams.toString()

      navigate({
        search: queryString
      })


      return newFiltes
    })


  }

  const resetFilters = () => {
    setFilterOptions(filterDefaultState)
  }

  return (
    <div className="App">
      <Header />
      <div className='app-content'>
        <Aside
          changeFilter={changeFilter}
          filterOptions={filterOptions}
          resetFilters={resetFilters}
        />

        <Routes>
          <Route path="/" element={<HomePage filterOptions={filterOptions} />} />
          <Route path="contactMe" element={<ContactMe />} />
          <Route path="aboutMe" element={<AboutMePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
