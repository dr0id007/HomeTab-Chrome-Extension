import React, { useEffect, useContext } from "react";
import SearchBar from "../UIComponents/SearchBar";
import TopNav from "../UIComponents/TopNav";
import "../../style/searchbar.css";
import Background from "../context/background";
import styled from "styled-components";
import Context from "../context/SitesContext";

import Contests from "../UIComponents/Contests";

const Home = () => {
  const bg = Background();
  const { state } = useContext(Context);
  console.log(state);

  useEffect(() => {
    // localStorage.getItem("bgColor") ?
    // document.body.style.backgroundColor = localStorage.getItem("bgColor") :
    // document.body.style.backgroundColor = "#212529";
  }, [state.color.background]);

  const Div = styled.div`
    // background-image: url(${bg});
     background: ${state.color.background};
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
      {/* <div className="background"></div> */}
      <div className="" style={{ background: state.color.background }}>
        <TopNav />
        <div className="container">
          <SearchBar />
        </div>
        <div className="container-fluid mt-5 pl-5 mx-auto row">
          <div className="col-12 text-center">
            <Contests className="" />
          </div>
        </div>
      </div>
      <img
        className="vector"
        src={require("../../assets/undraw_code_review_l1q9.svg")}
        alt="dads"
      />
    </>
  );
};

export default Home;
