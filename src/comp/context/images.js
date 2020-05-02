const images = (props) => {
  console.log("platform", props);
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
  ];

  const loc = image.filter((data) => {
    return data.name === props;
  })[0]
  if(loc) {
    console.log(loc);
    return loc.url;
  } else {
    return "https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png";
  }
  
  
  

};

export default images;
