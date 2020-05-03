import React, { useContext } from "react";
import Toggle from "./Toggle";
import SitesContext from "../../context/SitesContext";

const Platform = () => {
  const { state, dispatch } = useContext(SitesContext);

  return (
    <ul>
      <h4 className="platform">Available Platforms </h4>
      <hr />
      {state.map((site, index) => {
        return (
          <React.Fragment key={index}>
            <li>
              <p className="platform-name">{site.name}</p>
              <Toggle
                platform={site.name}
                value={site.value}
                dispatch={dispatch}
                state={state}
              />
            </li>
            <hr className="hr-settings" />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Platform;
