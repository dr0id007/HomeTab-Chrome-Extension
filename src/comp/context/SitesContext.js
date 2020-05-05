import React, { useState } from "react";

const SitesContext = React.createContext(true);

const initialState = {
  sites: [
    {
      name: "codechef",
      value: localStorage.getItem("codechef") === "false" ? false : true,
    },
    {
      name: "codeforces",
      value: localStorage.getItem("codeforces") === "false" ? false : true,
    },
    {
      name: "hackerrank",
      value: localStorage.getItem("hackerrank") === "false" ? false : true,
    },
    {
      name: "hackerearth",
      value: localStorage.getItem("hackerearth") === "false" ? false : true,
    },
    {
      name: "topcoder",
      value: localStorage.getItem("topcoder") === "false" ? false : true,
    },
    {
      name: "leetcode",
      value: localStorage.getItem("topcoder") === "false" ? false : true,
    },
    {
      name: "kaggle",
      value: localStorage.getItem("kaggle") === "false" ? false : true,
    },
  ],

  color: {
    background: "linear-gradient(to top, #bdc3c7, #2c3e50",
  },
  time: {
    value: "Europe/Moscow",
  },
};

export const SitesProvider = (props) => {
  const [state, setState] = useState(initialState);

  const toggle_site = (name, value) => {
    const initial = state;
    const newState = initial.sites.map((data) => {
      if (data.name === name) {
        data.value = value;
        localStorage.setItem(data.name, data.value);
      }
      return data;
    });
    setState({ ...state, sites: newState });
  };

  const handleBackground = (value) => {
    console.log("val:-", value);
    const newState = state;
    newState.color.background = value;
    setState({ ...newState });
  };

  const handleTimezone = (value) => {
    console.log("val:-", value);
    const newState = state;
    newState.time.value = value;
    setState({ ...newState });
  };

  return (
    <SitesContext.Provider
      value={{ state, toggle_site, handleBackground, handleTimezone }}
    >
      {props.children}
    </SitesContext.Provider>
  );
};
export const SitesConsumer = SitesContext.Consumer;

export default SitesContext;
