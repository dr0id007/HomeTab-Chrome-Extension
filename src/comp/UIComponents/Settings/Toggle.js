import React, { useState } from "react";
import "../../../style/toggle.css";

const Toggle = (props) => {
  // const [platforms, setPlatform] = useState({'hackerearth' : true,
  //                                             'codechef' : true,
  //                                             'topcode' : true,
  //                                             'codeforces' : true,
  //                                             'hackerrank' : true
  //                                  });


  const handleChange = (e) => {

    localStorage.setItem(props.platform, e.target.checked);
    window.location.reload();
  }

  const check = localStorage.getItem(props.platform) && localStorage.getItem(props.platform)  === "true" ? true : localStorage.getItem(props.platform)  === "false" ? false : true;

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
