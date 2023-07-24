import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
 
function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  function toggleMode(){
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    },1500)

  }
 
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path='/' element={<><Alert alert={alert}/><Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/></>}></Route>
      </Routes>
      <Routes>
        <Route path='about' element={<><About mode={mode}/></>}></Route>
      </Routes>

      {/* <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/> */}
      {/* <About mode={mode}/> */}
      {/* <Alert alert={alert}/>  */}
      {/* <Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/> */}
    </>
  );
} 

export default App;
