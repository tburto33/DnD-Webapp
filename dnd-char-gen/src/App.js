// import logo from './logo.svg';
import './App.css';
import dndheader from './dnd.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

function App() {

  return (
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
            <Button variant="primary">REROLL</Button>
          </div>
        </div>
      </header>
      <body>
        <p>Hello World!</p>
      </body>
    </div>
  );
}

export default App;
