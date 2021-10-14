import './App.css';
import dndheader from './dnd.png';
import 'bootstrap/dist/css/bootstrap.min.css'
// import CharStats from './Stats';
import MainButton from './Button';
import { characterData } from './Button';

function App() {

  return (
    // Header
    <div className="App">
      <header className="App-header">
        <div class="col">
          <h1>ONESHOT</h1>
          <div class="col-sm text-center">
            <h6>A CHARACTER GENERATOR FOR</h6>
          </div>
          <div>
            <img class="img-fluid header-img" src={dndheader} alt="dnd-logo" />
          </div>
          <div class="col-sm text-center">
            <MainButton />
          </div>
        </div>
      </header>
      <div class="">
        {/* <CharStats text='Name:' />
        <CharStats text= 'Race:' /> */}
      </div>
    </div>
  );
}

export default App;
