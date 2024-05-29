
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  // const darkMode = () => {
  //   if (mode !== 'dark') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#343a40';
  //     showAlerts("Dark Mode has been enabled", "success");

  //   }
  //   setInterval(() => {
  //     document.title = 'Best React App';
  //   }, 3000);
  //   setInterval(() => {
  //     document.title = 'Download Now';
  //   }, 2000);

  // }
 
    const toggleMode= (cls)=>{
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.add('bg-'+cls);
    }

    setInterval(() => {
      document.title = 'Best React App';
    }, 3000);
    setInterval(() => {
      document.title = 'Download Now';
    }, 2000);

 
  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  // const [text,setText] = useState('white');
  return (
    <>
      <Router>
        <Navbar title="TextUtils2" home="Home" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="TextUtils2" home="Home" mode={mode} darkMode={darkMode} greenMode={greenMode} /> */}
        <Alerts alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Your Text Here to Convert" mode={mode} />}>
          </Route>
          <Route exact path="/about" element={<About heading="About Us" />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
