import logo from './logo.svg';
import './App.css';
import Home from './MainBody/M_Homepage'
import Header from './MainBody/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{position:'relative'}}>
      <header>

      </header>
      <body>
      <Router>
      <div>

      <Header  />
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
