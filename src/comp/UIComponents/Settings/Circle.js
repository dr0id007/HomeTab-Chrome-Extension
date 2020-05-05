import React from "react";
import "../../../style/Circle.css";

const Circle = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleBack(props.data, props.index);
      }}
    >
      <button
        type="submit"
        // onClick={props.handleBack(props.data)}
        className="circle bg-trans m-0 p-0 ml-2 mb-2"
      >
        <span style={props.style} className="circle"></span>
      </button>
    </form>
  );
};

export default Circle;
