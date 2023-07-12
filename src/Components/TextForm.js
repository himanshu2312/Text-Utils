import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
     let copyText=document.getElementById("inputText");
    //  copyText.select();
     navigator.clipboard.writeText(copyText.value);
     props.showAlert("Text coppied to clicpboard!!", 'success');
  };
  const handleCross = () => {
     let copyText=document.getElementById("inputText");
     if (copyText.style.textDecoration) {
      copyText.style.removeProperty('text-decoration');
    } else {
      copyText.style.setProperty('text-decoration', 'line-through');
    }
  };
  const handleUnderLine = () => {
     let copyText=document.getElementById("inputText");
     if (copyText.style.textDecoration) {
      copyText.style.removeProperty('text-decoration');
    } else {
      copyText.style.setProperty('text-decoration', 'underline');
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  let mystyle={
    backgroundColor:'white',
    color:'black'
  }
  if(props.mode==='dark'){
    mystyle.backgroundColor='#343a40'
    mystyle.color='white'
  }
  const wordArray=text.trim().split(" ")
  const words=wordArray[wordArray.length-1]===""?wordArray.length-1:wordArray.length
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 style={mystyle}>{props.heading}</h1>
          <textarea
            className="form-control"
            id="inputText"
            rows="8"
            style={mystyle}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpper}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLower}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUnderLine}>
          UnderLine
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCross}>
          Cross
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>
          Remove Extra-spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3" 
            style={mystyle}>
        <h3>Your text Summary</h3>
        <p>{words} words and {text.trim().length} characters</p>
        <p>{words * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text.trim():"There's no text to show!!"}</p>
      </div>
    </>
  );
}



TextForm.defaultProps = {
  heading: "Enter Text",
};
