import React from 'react'
import {BrowserRouter as Router}  from 'react-router-dom'
import MainPage from './containers/MainPage';


function App() {
  return (
    <Router>
      <MainPage></MainPage>
    </Router>
  );
}

export default App;
