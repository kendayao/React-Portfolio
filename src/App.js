import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
  <div>
  <NavTabs />
  <Footer />
  </div>
  )
}
export default App;
