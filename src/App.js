import logo from './logo.svg';
import './App.css';
import Home from './MainBody/M_Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>

      </header>
      <body>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </div>
    </Router>
      </body>
    </div>
  );
}

export default App;
