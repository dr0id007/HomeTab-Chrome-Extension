import React from "react";
import "../../style/Card.css";

const Cards = (props) => {
  console.log("datsdasda:-", props.data);
  return (
    <div className="col-3 mb-2">
      <div className="card shadow round w-100 h-100">
        <h5 class="card-title mt-2">{props.data.name}</h5>
        <p class="card-text">
          From:- {props.data.startTime} <br />
          To:- {props.data.endTime}
        </p>
        <a href={props.data.url} class="">
          Go To Contest
        </a>
      </div>
    </div>
  );
};

export default Cards;
