import React from "react";
import Toggle from "./Toggle";

const Platform = () => {
  return (
    <ul>
      <h4 className="platform">Available Platforms </h4>
      <hr />
      <li>
        <p className="platform-name">Hackerearth</p>
        <Toggle platform="hackerearth"/>
      </li>
      <hr className="hr-settings" />
      <li>
        <p className="platform-name">Codechef</p>
        <Toggle platform="codechef"/>
      </li>
      <hr className="hr-settings" />
      <li>
        <p className="platform-name">Codeforces</p>
        <Toggle platform="codeforces"/>
      </li>
      <hr className="hr-settings" />
      <li>
        <p className="platform-name">Hackerrank</p>
        <Toggle platform="hackerrank"/>
      </li>
      <hr className="hr-settings" />
      <li>
        <p className="platform-name">Topcoder</p>
        <Toggle platform="topcoder"/>
      </li>
    </ul>
  );
};

export default Platform;
