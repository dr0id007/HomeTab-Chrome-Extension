const images = () => {
  const images = [
    "../assets/gray-concrete-roadway-beside-green-and-brown-leafed-trees-1546898.jpg",
    "../assets/landscape-photography-of-sea-shore-719597.jpg",
    "../assets/man-in-red-jacket-standing-outside-of-cave-in-front-of-three-949193.jpg",
    "../assets/photo-of-a-man-standing-in-the-cliff-733036.jpg",
    "../assets/person-on-a-bridge-near-a-lake-747964.jpg",
    "../assets/photo-of-hanging-balloon-with-tables-and-chairs-929264.jpg",
    "../assets/tree-meadow-fog-foggy-11744.jpg",
    "../assets/two-brown-benches-2946816.jpg",
  ];

  const random = Math.floor(Math.random() * 8);

  return images[random];
};

export default images;
