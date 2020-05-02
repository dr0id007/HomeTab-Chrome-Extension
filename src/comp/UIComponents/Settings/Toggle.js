import React, { useState } from "react";
import "../../../style/toggle.css";

const Toggle = (props) => {
  // const [platforms, setPlatform] = useState({'hackerearth' : false,
  //                                             'codechef' : true,
  //                                             'topcode' : true,
  //                                             'codeforces' : false,
  //                                             'hackerrank' : false
  //                                  });


  const handleChange = (e) => {
    localStorage.setItem(props.platform, e.target.checked);
  }

  const check = localStorage.getItem(props.platform) === "true" ? true : false;

  return (
    <>
      <label className="switch">
        <input type="checkbox" id="togBtn" defaultChecked={check} onChange={handleChange}/>
        <div className="slider round"></div>
      </label>
    </>
  );
};

export default Toggle;
