import React, { useState } from "react";
import "../../style/searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import Quotes from "../context/quotes";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const quote = Quotes();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      "https://www.google.com/search?client=ubuntu&channel=fs&q=" +
      search +
      "&ie=utf-8&oe=utf-8 + props.location.state.search";
  };
  console.log("quoye:-", quote);

  return (
    <div className="container row text-center main mt-5">
      <div className="col-12 mx-auto searchbar">
        <form className="row" onSubmit={handleSubmit}>
          <h1 className="col quote text-center mb-5 head">{quote}</h1>
          <div className="col-12 mt-4">
            <input
              autoFocus
              autoComplete="off"
              className=" form-search"
              placeholder="Search..."
              name="search"
              onChange={handleSearch}
              value={search}
            />
            <label>
              <button className="btn btn-dark">
                <AiOutlineSearch />
              </button>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
