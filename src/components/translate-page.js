import React, { useState } from "react";

export default function TextForm(props) {
  const [inputText, setInputText] = useState("");

  // Function to handle text input change
  const handleInputChange = (event) => {
    const newInputText = event.target.value;
    setInputText(newInputText.toUpperCase());
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleInputChange}
          id="myBox"
          rows="8"></textarea>
      </div>
      <p>{inputText.length}-words</p>
      <p>{inputText.split(" ").length}-character</p>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={inputText}
          placeholder="preview"
          id="myBox2"
          rows="8"></textarea>
      </div>
    </div>
  );
}
