import Axios from "axios";

export const fetchUpcomingContests = async () => {
  const url = process.env.REACT_APP_URL;
  const res = await Axios.get(url).catch((err) => {
    if (err) {
      console.log("error:-", err);
      return err;
    }
  });
  return res.data.results.upcoming;
};

export const fetchOngoingContests = async () => {
  const url = process.env.REACT_APP_URL;
  const res = await Axios.get(url).catch((err) => {
    if (err) {
      console.log("error:-", err);
      return err;
    }
  });
  return res.data.results.ongoing;
};
