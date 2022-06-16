import logo from './logo.svg';
import './App.css';

function App() {

  var nombre = "Pablo";
  var saludo = <p>
    <hr /> Chau mundo. <hr />
  </p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo soy {nombre}  <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {saludo}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
