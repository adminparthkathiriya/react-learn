import React, { useState } from "react";

export default function About() {
  const [toggle, toggleupdate] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [togglebtn, togglebtntext] = useState("Enable dark mode");
  const togglecontant = () => {
    if (toggle.color === "white") {
      toggleupdate({
        color: "black",
        backgroundColor: "white",
      });
      togglebtntext("Enable dark mode");
    } else {
      toggleupdate({
        color: "white",
        backgroundColor: "black",
      });
      togglebtntext("Disable dark mode");
    }
  };

  return (
    <div className="container">
      <div className="dropdownshow" style={toggle}>
        <p className="contant">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          ratione error libero suscipit minima explicabo quo fuga repellendus
          eum, similique ipsam praesentium veritatis quia minus assumenda.
          Cupiditate, harum aliquam, odio soluta deserunt, corporis nulla
          veritatis inventore molestiae blanditiis iusto. Vel itaque doloribus,
          architecto repellat quibusdam cumque placeat unde molestias totam
          minima corrupti laudantium iure iste nobis est nam assumenda iusto
          sunt dicta saepe ullam. Blanditiis, dolorem eius deleniti beatae vero
          aliquam, quos velit eum illo laudantium impedit cumque laborum quaerat
          tenetur ipsa natus a ipsam quas cupiditate id delectus nobis?
          Necessitatibus ipsa molestias quod tenetur suscipit quasi a quisquam?
          Ratione.
        </p>
      </div>
      <button type="button" className="btn btn-primary" onClick={togglecontant}>
        {togglebtn}
      </button>
    </div>
  );
}
