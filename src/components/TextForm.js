import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked!");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked!");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success');
  };
  const handleClearClick = () => {
    console.log("Uppercase was clicked!");
    const newText = ('');
    setText(newText);
    props.showAlert('Text cleared!', 'success');
  };
  const handleOnChange = (event) => {
    console.log("On change!");
    console.log(event);
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed!', 'success');
  }


  const [text, setText] = useState("");
  console.log(text);
  // console.log(setText);
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length!==0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: 'Nothing to preview'}</p>
      </div>
    </>
  );
}
