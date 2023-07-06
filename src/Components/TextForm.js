import React, { useState } from "react";
import PropTypes from "prop-types";
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
  const handleCopy = () => {
     let copyText=document.getElementById("inputText");
     copyText.select();
     document.execCommand("copy");
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
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="inputText"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpper}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLower}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUnderLine}>
          UnderLine
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCross}>
          Cross
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter Text",
};
