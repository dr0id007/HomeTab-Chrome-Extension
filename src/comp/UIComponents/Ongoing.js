import React, { useEffect, useState } from "react";
import { fetchOngoingContests } from "../context/fetchContests";
import moment from "moment";
import Card from "../UIComponents/Cards";
import { GoClock } from "react-icons/go";

const Upcoming = () => {
  const [state, setState] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fet = async () => {
      const res = await fetchOngoingContests();
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

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="contest">
        <button className="btn btn-dark" onClick={onShow}>
          <label >
            <GoClock className="up-icon pt-1" />Ongoing Contests
          </label>
          
        </button>
      </div>
      <div className="text-left mt-5 row">
        {show
          ? state.map((data, index) => {
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
          : " "}
      </div>
    </div>
  );
};

export default Upcoming;
