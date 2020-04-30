import React from "react";
import "../../style/Card.css";

const Cards = (props) => {
  console.log("datsdasda:-", props.data);
  return (
    <div className="card shadow round col-4">
      <h5 class="card-title">{props.data.name}</h5>
      <p class="card-text">
        From:- {props.data.startTime} <br />
        To:- {props.data.endTime}
      </p>
      <a href={props.data.url} class="">
        Go To Contest
      </a>
    </div>
  );
};

export default Cards;
