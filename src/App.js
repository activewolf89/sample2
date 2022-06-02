import logo from './logo.svg';
import React,{lazy,Component,Suspense} from "react";

import './App.css';
import Home_1 from './MainBody/M_Homepage'
import Home_2 from './MainBody/M_Homepage_2'
import Header from './MainBody/Header'
import E_Frontend from './MainBody/E_Frontend'
import E_Frontend_2 from './MainBody/E_Frontend_2'
import E_Backend from './MainBody/E_Backend'
import E_Backend_2 from './MainBody/E_Backend_2'
import S_Links from './MainBody/S_Links'
import S_Links_2 from './MainBody/S_Links_2'
import BonusLink from './MainBody/BonusLink'
import U_Frontend from './MainBody/U_Frontend'
import U_Frontend_2 from './MainBody/U_Frontend_2'
import ModalContainer from './ModalContainer';
import Footer from './MainBody/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      post_usability_test: 1,
      showModal: false

    };
    this.toggleUsabilityTest = this.toggleUsabilityTest.bind(this)
    this.handleToggle = this.handleToggle.bind(this)

  }
  toggleUsabilityTest =function(val){
    this.setState({
      post_usability_test: val,
      showModal: true
    })
  }
  handleToggle = function(){
    this.setState({
      showModal: !this.state.showModal,
    })
  }
  render(){

  return (
    <div className="App" style={{position:'relative'}}>
      <header>

      </header>
      <body>
      <Router>
      <div>
      {
      this.state.showModal &&
      <ModalContainer post_usability_test = {this.state.post_usability_test}  handleClose={this.handleToggle} />
    }
      <Header
        toggleUsabilityTest = {this.toggleUsabilityTest}
        post_usability_test = {this.state.post_usability_test}
       />
      <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{maxWidth:'1200px', width:'100vw'}}>
      <Routes>
      <Route path="/" element = {this.state.post_usability_test == 1 ? <Home_2 />:<Home_1 />} />
      <Route path="/event-planner-front-end" element = {this.state.post_usability_test == 1 ? <E_Frontend_2 />:<E_Frontend />} />
      <Route path="/event-planner-back-end" element = {this.state.post_usability_test == 1 ? <E_Backend_2 />:<E_Backend />} />
      <Route path="/user-front-end" element = {this.state.post_usability_test == 1 ? <U_Frontend_2 />:<U_Frontend />} />
      <Route path="/snapshot-links" element = {this.state.post_usability_test == 1 ? <S_Links_2 />:<S_Links />} />
      <Route path="/bonus-link" element = {this.state.post_usability_test == 1 ? <BonusLink />:<BonusLink />} />
      </Routes>
      </div>
      </div>
      </div>
    </Router>
    <Footer
    />

      </body>


    </div>
  );
}
}

export default App;
