import React from "react";
import SearchBar from "../UIComponents/SearchBar";
import "../../style/searchbar.css";
import images from "../context/images";
import animes from "../context/anime";
import styled from "styled-components";

const Home = () => {
  const anime = animes();
  const img = images();
  console.log("rand:-", anime);

  const Div = styled.div`
    background-image: url(${anime});
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    filter: blur(0px);
    opacity: 0.9;
    filter: contrast(70%);
  `;

  return (
    <Div className="h-100">
      <div className="container">
        <SearchBar />
      </div>
    </Div>
  );
};

export default Home;
