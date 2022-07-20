import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#072151"
      } else {
      setmode('light');
      document.body.style.backgroundColor = "white"

    }
  };
  return (
    <>
      <Navbar
        title='Text-Utils'
        About='About us'
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className='container my-3'>
        <Form heading='Enter Text here' mode={mode}/>
      </div>
      <About />
    </>
  );
}

export default App;
