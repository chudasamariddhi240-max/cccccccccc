import React from 'react'

export default function home() {
  return (
    <div>
      import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';

import About from './About';

function App() {    
  return (
    <div className="App">
      <header className="App-header">


        <BrowserRouter>looo

        <Link to='/h' >Home</Link>

        <Link to='/veer'>About</Link>
     
        <Routes>
          <Route path='/h' element={<Home />} />
          <Route path='/veer' element={<About />} />
        </Routes>

        </BrowserRouter>
      </header>

    </div>
  );
}

export default App;
    </div>
  )
}
