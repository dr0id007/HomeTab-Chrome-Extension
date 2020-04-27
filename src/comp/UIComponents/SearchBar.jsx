import React, { useState } from "react";
import "../../style/searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [search, setSearch] = useState("");
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

  return (
    <div className="container row text-center main">
      <div className="col-6 mx-auto searchbar h-100">
        <form className="row" onSubmit={handleSubmit}>
          <h2 className="col-12 mb-5 text-white head">
            Knowing you're different is only the beginning. ...
          </h2>
          <div className="col-12 mt-5">
            <input
              autoFocus
              autoComplete="off"
              className=" form-search"
              placeholder="search..."
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
