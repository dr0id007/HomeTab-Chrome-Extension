import React, { useState, useEffect } from "react";
// import { FaArrowCircleRight } from "react-icons/fa";
import Images from "../context/images";
import "../../style/Card.css";

const Cards = (props) => {
  const [location, setLocation] = useState("../../assets/icon32.png");

  useEffect(() => {
    const fetchImg = async () => {
      const location = await images(props.data.platform);
      console.log("loc:-", location);
      setLocation(location.location);
    };
    fetchImg();
  }, []);
  return (
    <div className="col-3 mb-2">
      <div className="card shadow round w-100 h-100">
        <img
          className="card-img-top"
          src={require("../../assets/codechef.png")}
          alt="Card"
        ></img>
        <h5 className="card-title mt-2">{props.data.name}</h5>
        <p className="card-text">
          From:- {props.data.startTime} <br />
          To:- {props.data.endTime} <br />
          {/* <a href={props.data.url} className="text-right">
            <FaArrowCircleRight />
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default Cards;
