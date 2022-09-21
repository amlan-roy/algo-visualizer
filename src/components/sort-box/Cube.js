import React from "react";

function Cube({ isActive, isFound, data }) {
  const commonClassName = `${isActive ? "active " : ""} ${
    isFound ? "found " : ""
  }`;
  const commonStyle = {
    height: `${isActive ? "6em" : ""}`,
  };
  return (
    <div className="cube">
      <div className={`${commonClassName} side top`}></div>
      <div className={`${commonClassName} side left`} style={commonStyle}></div>
      <div className={`${commonClassName} side front`} style={commonStyle}>
        {data}
      </div>
    </div>
  );
}

export default Cube;
