import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/searchbar.css";

const SearchBar = () => {
  let history = useHistory();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search:-", search);
    history.push("/google", { search });
  };

  return (
    <div className="container row text-center">
      <div className="col-8 mx-auto searchbar">
        <form className="row" onSubmit={handleSubmit}>
          <input
            className="form-control col-8"
            placeholder="type search"
            name="search"
            onChange={handleSearch}
            value={search}
          />
          <button className="btn col-3  btn-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
