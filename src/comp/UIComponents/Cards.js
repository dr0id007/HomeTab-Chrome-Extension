import React, { useState, useEffect } from "react";
// import { FaArrowCircleRight } from "react-icons/fa";
import Images from "../context/images";
import "../../style/Card.css";

const Cards = (props) => {
  const [location, setLocation] = useState("../../assets/icon32.png");

  useEffect(() => {
    const location = Images(props.data.platform);
    console.log("loc:-", location);
    setLocation(location);
  }, [props]);
  return (
    <div className="col-2 mb-2">
      <div className="card mb-3 round w-100 h-100">
        <img className="card-img-top" src={location} alt="Card"></img>
        <h6 className="card-title mt-2 ">{props.data.name}</h6>
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
