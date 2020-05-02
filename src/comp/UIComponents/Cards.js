import React, { useState, useEffect } from "react";
// import { FaArrowCircleRight } from "react-icons/fa";
import Images from "../context/images";
import { Image } from "react-bootstrap";
import "../../style/Card.css";

const Cards = (props) => {
  const [location, setLocation] = useState("../../assets/icon32.png");

  useEffect(() => {
    const location = Images(props.data.platform);
    console.log("loc:-", location);
    setLocation(location);
  }, [props]);
  return (
    <div className="col-6 mb-2 card">
      <div className="mb-3 round row">
        <Image
          className="img-card mt-3"
          src={location}
          alt="Card"
          width="80"
          height="80"
          roundedCircle
        />
        <div className="ml-4 col-8">
          <h6 className="card-title mt-2 mb-0">{props.data.name}</h6>
          <p className="card-text card-platform text-capitalize mt-1">
            {props.data.platform}
          </p>
          <p className="card-text card-time">
            Start:- {props.data.startTime} {"IST"} <br />- {props.data.endTime}{" "}
            {"IST"} <br />
            {/* <a href={props.data.url} className="text-right">
            <FaArrowCircleRight />
          </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
