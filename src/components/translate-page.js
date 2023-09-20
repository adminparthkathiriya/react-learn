import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handeonclick = () => {
    console.log("handeonclick");
    setText("fbfdbdfbd");
  };
  const handeonchange = () => {
    console.log("handeonchange");
  };
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handeonchange}
          value={text}
          id="myBox"
          rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handeonclick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
