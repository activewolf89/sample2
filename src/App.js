import logo from './logo.svg';
import './App.css';
import Home from './MainBody/M_Homepage'
import Header from './MainBody/Header'
import E_Frontend from './MainBody/E_Frontend'
import E_Backend from './MainBody/E_Backend'
import S_Links from './MainBody/S_Links'
import U_Frontend from './MainBody/U_Frontend'
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
      <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{maxWidth:'1200px', width:'100vw'}}>
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/event-planner-front-end" element = {<E_Frontend />} />
      <Route path="/event-planner-back-end" element = {<E_Backend />} />
      <Route path="/user-front-end" element = {<U_Frontend />} />
      <Route path="/snapshot-links" element = {<S_Links />} />
      </Routes>
      </div>
      </div>
      </div>
    </Router>
      </body>
    </div>
  );
}

export default App;
