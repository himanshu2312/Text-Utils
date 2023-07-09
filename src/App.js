import "./App.css";
import React, {useState}from 'react'

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(msg,type)=>{
    setAlert(
      {
        message: msg,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const switchMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      showAlert("Dark Mode is Enables",'success')
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light Mode is Enables",'success')
    }
    console.log("Executed")
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={switchMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" mode={mode} >
      <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
      </div>
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
