const anime = () => {
  const anime = [
    "../assets/haikyuu.jpg",
    "../assets/itachi.jpg",
    "../assets/jiraya.jpg",
    "../assets/kakashi.jpg",
    "../assets/ichigo.jpg",
  ];

  const random = Math.floor(Math.random() * 5);

  return anime[random];
};

export default anime;
