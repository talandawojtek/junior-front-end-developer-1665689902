import logo from './logo.svg';
import './App.css';

function App() {

  const tasks = [
    {"id":1,"task":"to clean the house","complete":true},
    {"id":1,"task":"to water the flowers","complete":false},
    {"id":1,"task":"to wash the dishes","complete":true},
    {"id":1,"task":"to cook the dinne","complete":false},
    {"id":1,"task":"to walk the dog","complete":false},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
