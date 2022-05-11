import logo from './logo.svg';
import './App.css';

function ListAboutYogg() {
  return (
    <div>
      <h1>Thing I like About Yogg Sharon</h1>
      <ol>
        <li> He an Old God</li>
        <li> Have Beautiful teeth</li>
        <li> TENTACLES</li>
        <li>And Most Important RANDOM</li>
        <li>He some time will stab you in the back</li>
      </ol>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListAboutYogg />
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
