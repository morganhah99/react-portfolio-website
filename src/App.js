import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about';
import Home from './pages';
import Projects from './pages/projects';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path = '/About' element={<About/>}/>
        <Route path= '/Projects' element={<Projects/>}/>
      </Routes>
    </Router>
      <header className="App-header">
        <div className='logo'>
          <img src='opposite.png' alt="lightbulb"></img>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World
        </h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
