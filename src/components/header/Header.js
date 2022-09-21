import React from "react";

function Header({ text = `Algo Visualiser` }) {
  return (
    <div className="container">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
