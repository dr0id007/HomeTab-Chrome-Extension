import Axios from "axios";

export const fetchUpcomingContests = async () => {
  const url = process.env.REACT_APP_URL;
  console.log("url:-", url);
  const res = await Axios.get(url).catch((err) => {
    if (err) {
      console.log("error:-", err);
      return err;
    }
  });
  console.log("res:-", res.data);
  return res.data.results.upcoming;
};

export const fetchOngoingContests = async () => {
  const url = process.env.REACT_APP_URL;
  console.log("url:-", url);
  const res = await Axios.get(url).catch((err) => {
    if (err) {
      console.log("error:-", err);
      return err;
    }
  });
  console.log("res:-", res.data);
  return res.data.results.ongoing;
};
