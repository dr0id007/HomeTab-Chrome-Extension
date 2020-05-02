import React from "react";
import "../../../style/toggle.css";

const Toggle = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" id="togBtn" defaultChecked />
        <div className="slider round"></div>
      </label>
    </>
  );
};

export default Toggle;
