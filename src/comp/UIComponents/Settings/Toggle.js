import React from "react";
import "../../../style/toggle.css";

const Toggle = (props) => {
  const handleChange = (e) => {
    props.dispatch({
      type: "TOGGLE_SITE",
      value: { name: props.platform, value: !props.value },
    });
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
