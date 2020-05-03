import React, { useReducer, useEffect } from "react";
import SiteReducer from "./reducer";

const SitesContext = React.createContext(true);

const initialState = [
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
];

export const SitesProvider = (props) => {
  const [state, dispatch] = useReducer(SiteReducer, initialState);

  //   useEffect(() => {
  //       localStorage.setItem
  //   })

  return (
    <SitesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SitesContext.Provider>
  );
};
export const SitesConsumer = SitesContext.Consumer;

export default SitesContext;
