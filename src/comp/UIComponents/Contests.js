import React, { useEffect, useState } from "react";
import {
  fetchUpcomingContests,
  fetchOngoingContests,
} from "../context/fetchContests";
import moment from "moment";
import { IoMdTrendingUp } from "react-icons/io";
import Card from "../UIComponents/Cards";
import { GoClock } from "react-icons/go";

const Contests = () => {
  const [show, setShow] = useState("0");
  const [stateUp, setStateUp] = useState([]);
  const [stateOn, setStateOn] = useState([]);
  useEffect(() => {
    const fet = async () => {
      const res = await fetchUpcomingContests();
      setStateUp(res);
    };
    fet();
    const fet2 = async () => {
      const res = await fetchOngoingContests();
      setStateOn(res);
    };
    fet2();
  }, []);

  const Time = (time) => {
    const t = moment
      .unix(time)
      .add(+5.5, "h")
      .utc();
    return moment(t).format("MM/DD/YYYY HH:mm");
  };

  const onUp = () => {
    setShow("1");
  };

  const onOn = () => {
    setShow("2");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="contest col-6">
          <button onClick={onUp} className="btn btn-dark">
            <label>
              <IoMdTrendingUp className="up-icon pt-1" /> Upcoming Contests
            </label>
          </button>
        </div>
        <div className="contest col-6">
          <button className="btn btn-dark" onClick={onOn}>
            <label>
              <GoClock className="up-icon pt-1" />
              Ongoing Contests
            </label>
          </button>
        </div>
      </div>

      <div className="text-left mt-5 row">
        {show === "0"
          ? ""
          : show === "1"
          ? stateUp.map((data, index) => {
              console.log("data:-", data);
              return (
                <Card
                  key={index}
                  data={{
                    name: data.name,
                    startTime: Time(data.startTime),
                    endTime: Time(data.endTime),
                    url: data.url,
                    platform: data.platform,
                  }}
                />
              );
            })
          : stateOn.map((data, index) => {
              console.log("data:-", data);
              return (
                <Card
                  key={index}
                  data={{
                    name: data.name,
                    startTime: Time(data.startTime),
                    endTime: Time(data.endTime),
                    url: data.url,
                  }}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Contests;
