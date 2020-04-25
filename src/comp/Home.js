import React from "react";
import SearchBar from "./SearchBar";
import "../style/searchbar.css";

const Home = () => {
  return (
    <div style={{ backgroundImage: "url(../../../assets/background1.jpg)" }}>
      <div className="bg-image"></div>
      <div className="container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
