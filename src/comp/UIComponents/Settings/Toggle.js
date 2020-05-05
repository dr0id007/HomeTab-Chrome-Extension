import React from "react";
import "../../../style/toggle.css";

const Toggle = (props) => {
  const handleChange = (e) => {
    props.toggle_site(props.platform, !props.value);
  };

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          id="togBtn"
          checked={props.value}
          value={props.value}
          onChange={handleChange}
        />
        <div className="slider round"></div>
      </label>
    </>
  );
};

export default Toggle;
