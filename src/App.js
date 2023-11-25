import logo from './logo.svg';
import './App.css';
import './styles/globals.scss';

function App() {
  return (
    <div className="App">
        <div className="Header">
            <div className="Logo">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="Title">
            <h1>React App</h1>
            </div>
        </div>
        <div className="Body">
            <div className="Button">
            <button>Click Me</button>
            </div>
        </div>
        <div className="Footer">
            <div className="Text">
            <p>Footer</p>
            </div>
        </div>
    </div>
  );
}

export default App;
