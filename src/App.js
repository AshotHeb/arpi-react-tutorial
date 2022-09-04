import './App.css';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-content'>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
