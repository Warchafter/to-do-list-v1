import React from 'react'
import {BrowserRouter as Router}  from 'react-router-dom'
import MainPage from './containers/MainPage';
import NavBar from './containers/NavBar';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <MainPage></MainPage>
    </Router>
  );
}

export default App;
