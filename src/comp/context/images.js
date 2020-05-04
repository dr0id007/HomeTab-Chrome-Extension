const images = (props) => {
  const image = [
    {
      name: "codechef",
      location: "../assets/codechef.png",
      url: "https://miro.medium.com/max/666/1*1W0-bbmt4iiEpp_pPrS0VQ.png",
    },
    {
      name: "codeforces",
      location: "../../assets/codeforces.png",
      url:
        "https://sta.codeforces.com/s/61317/images/codeforces-telegram-square.png",
    },
    {
      name: "hackerrank",
      location: "../../assets/hackerrank.png",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
      name: "hackerearth",
      location: "../../assets/hackerearth.png",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png",
    },
    {
      name: "topcoder",
      location: "../../assets/topcoder.webp",
      url: "https://avatars3.githubusercontent.com/u/4291571?s=280&v=4",
    },
    {
      name: "kaggle",
      location: "../../assets/kaggle.png",
      url: "https://www.evolveai.co.uk/uploads/images/905a26b8e3dafd4f9c9a64a41acbfdf3.png",
    },
    {
      name: "leetcode",
      location: "../../assets/leetcode.jpg",
      url: "https://www.amadercart.com/wp-content/uploads/2019/10/LeetCode.jpg",
    }
  ];

  const loc = image.filter((data) => {
    return data.name === props;
  })[0];
  if (loc) {
    return loc.url;
  } else {
    return "https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png";
  }
};

export default images;
