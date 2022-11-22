import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { NotFound } from './pages/404';
import { AboutMePage } from './pages/AboutMe';
import { ContactMe } from './pages/ContactMe';
import { HomePage } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-content'>
        <Aside />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contactMe" element={<ContactMe />} />
          <Route path="aboutMe" element={<AboutMePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
