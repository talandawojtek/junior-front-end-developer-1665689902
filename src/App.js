import logo from './logo.svg';
import './App.css';

function App() {

  const tasks = [
    {"id":1,"title":"to clean the house","author":"wojtek","created":"",},
    {"id":2,"title":"to water the flowers","author":"wojtek","created":"",},
    {"id":3,"title":"to wash the dishes","author":"wojtek","created":"",},
    {"id":4,"title":"to cook the dinne","author":"wojtek","created":"",},
    {"id":5,"title":"to walk the dog","author":"wojtek","created":""}
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
