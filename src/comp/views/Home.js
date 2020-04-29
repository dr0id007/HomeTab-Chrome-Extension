import React from "react";
import SearchBar from "../UIComponents/SearchBar";
import TopNav from "../UIComponents/TopNav";
import "../../style/searchbar.css";
import Background from "../context/background";
import styled from "styled-components";
import Upcoming from "../UIComponents/Upcoming";
import Ongoing from "../UIComponents/Ongoing";

const Home = () => {
  const bg = Background();
  console.log("rand:-", bg);

  const Div = styled.div`
    // background-image: url(${bg});
    // background-color: #121212;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // width: 100%;
    // filter: blur(0px);
    // opacity: 0.9;
    // filter: contrast(70%);
  `;

  return (
    <>
      <Div className="">
        <TopNav />
        <div className="container">
          <SearchBar />
        </div>
        <div className="container-fluid mt-5 ml-5 pl-5 mx-auto row">
          <div className="col-6 text-center">
            <Upcoming className="" />
          </div>
          <div className="col-6 text-center">
            <Ongoing className="" />
          </div>
        </div>
      </Div>
    </>
  );
};

export default Home;
