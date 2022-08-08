import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

/*Children Property*/
const Button = (props) => {
  return <button className='btn'>
    <FontAwesomeIcon icon={faBurger} size="xs" />
  </button>
}

const Aside = ()=>{
  return (
    <aside className='aside'>

    </aside>
  )
}

function App() {
  return (
    <div className="App">
      <Aside />
      <Button>
        Click
      </Button>
    </div>
  );
}

export default App;
