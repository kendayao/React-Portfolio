import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs"
import Footer from "./components/Footer"
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import portfolio from "./portfolio.json"
import './App.css';

function App() {
  return (
  <Router>
    <div>
      <NavTabs />

      <Route exact path="/">
        <About />
      </Route>

      <Route exact path="/projects">
          <Portfolio
            portfolio={portfolio}
          />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>





      
      <Footer />
  </div>
  </Router>
  )
}
export default App;
