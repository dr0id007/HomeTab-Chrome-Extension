import React, { useContext, useCallback } from "react";
import TimezonePicker from "react-bootstrap-timezone-picker";
import "../../../style/Timezone.css";
import Context from "../../context/SitesContext";

const Timezone = () => {
  const { state, handleTimezone } = useContext(Context);

  const handleChange = (value) => {
    console.log("value", value);
    handleTimezone(value);
  };
  return (
    <TimezonePicker
      absolute={false}
      defaultValue={state.time.value}
      placeholder="Select timezone..."
      onChange={handleChange}
    />
  );
};

export default Timezone;
