import React, { useEffect, useState } from "react";
import { fetchUpcomingContests } from "../context/fetchContests";
import moment from "moment";
import { IoMdTrendingUp } from "react-icons/io";
import Card from "../UIComponents/Cards";

const Upcoming = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState([]);
  useEffect(() => {
    const fet = async () => {
      const res = await fetchUpcomingContests();
      setState(res);
    };
    fet();
  }, []);

  const Time = (time) => {
    const t = moment
      .unix(time)
      .add(+5.5, "h")
      .utc();
    return moment(t).format("MM/DD/YYYY HH:mm");
  };

  const onshow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="">
        <button onClick={onshow} className="btn btn-dark">
          <label>
            <IoMdTrendingUp className="up-icon pt-1" /> Upcoming Contests
          </label>
        </button>
      </div>
      <div className="text-left mt-5 row">
        {show
          ? state.map((data, index) => {
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
            })
          : ""}
      </div>
    </div>
  );
};

export default Upcoming;
