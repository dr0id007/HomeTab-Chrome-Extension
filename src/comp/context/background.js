const Background = () => {
  const bg = ["../assets/ecopetit.cat-wings-wallpaper-hd-2784727.png"];

  const random = Math.floor(Math.random() * bg.length);

  return bg[random];
};

export default Background;
