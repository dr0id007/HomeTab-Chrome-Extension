import React from "react";
import { CirclePicker } from 'react-color';

const Background = () => {
//   const [color, setColor] = useState("#212529")
//   console.log(color);

  const handleBGChange = (color, event) => {
    document.body.style.backgroundColor = color.hex;
    console.log(document.getElementsByClassName("data"));

    localStorage.setItem("bgColor", color.hex);
  }

  const handleInputChange = (color, event) => {
    document.getElementsByClassName("form-search")[0].style.borderBottom = "2px solid".concat(color.hex);
    
    localStorage.setItem("inputColor", color.hex);
  }

  return (
    <>
        <h4 className="platform">Background Theme </h4>
        
        <CirclePicker
            onChange = {handleBGChange}
        />
        <br />
        <h4 className="platform">Input Theme</h4>
        <CirclePicker
            onChange = {handleInputChange}
        />

        
    </>
  );
};

export default Background;
