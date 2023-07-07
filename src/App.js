import "./App.css";
import React, {useState}from 'react'

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {

  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyze"/>
      <About />
      </div>
    </>
  );
}

export default App;
