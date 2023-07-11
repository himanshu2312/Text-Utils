import "./App.css";
import React, { useState } from "react";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode is Enables", "success");
      document.title = "TextUtils - Home'Dark'Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enables", "success");
      document.title = "TextUtils - Home'Light'Mode";
    }
    console.log("Executed");
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* Home Route/Page */}
          {/* <Routes>
            <Route
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to Analyze"
                  mode={mode}
                />
               {/* }
            /> */}
            {/* About Route/Page */}
            {/* <Route path="/about" element={<About mode={mode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
