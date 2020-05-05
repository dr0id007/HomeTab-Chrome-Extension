import React, { useContext } from "react";
import { CirclePicker } from "react-color";
import Circle from "./Circle";
import Gradient from "../../context/Gradient";
import Context from "../../context/SitesContext";

const Background = () => {
  const { handleBackground } = useContext(Context);
  //   const [color, setColor] = useState("#212529")
  //   console.log(color);

  const handleBGChange = (value, index) => {
    console.log("val in call", value);
    document.body.style.background = Gradient()[index];
    // console.log(document.getElementsByClassName("data"));
    handleBackground(Gradient()[index]);
    localStorage.setItem("bgColor", value);
  };

  const handleInputChange = (color, event) => {
    document.getElementsByClassName(
      "form-search"
    )[0].style.borderBottom = "2px solid".concat(color.hex);

    localStorage.setItem("inputColor", color.hex);
  };

  return (
    <>
      <h4 className="platform">Background Theme </h4>
      {/* <CirclePicker onChange={handleBGChange} /> */}
      <div className="row">
        {Gradient().map((data, index) => {
          return (
            <Circle
              style={{ background: data }}
              key={index}
              index={index}
              data={data}
              handleBack={handleBGChange}
            />
          );
        })}
      </div>
      <br />
      <h4 className="platform">Input Theme</h4>
      <CirclePicker onChange={handleInputChange} />
    </>
  );
};

export default Background;
