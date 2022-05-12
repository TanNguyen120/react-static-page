import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

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

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      <nav>
        <ul className="nav-item">
          <li> <a href="#">Home</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
