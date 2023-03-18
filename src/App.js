
import './App.css';
import { Counter } from './containers/Counter';
import { MirrorInput } from './containers/MirrorInput';

function App({
  dispatch
}) {
  return (
    <div className="App">
      <Counter dispatch={dispatch} />

      <MirrorInput dispatch={dispatch} />
    </div>
  );
}

export default App;
