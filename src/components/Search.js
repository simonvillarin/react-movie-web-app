import React, { useContext, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { AppbarContext } from "../context/AppbarContext";
import { SearchContext } from "../context/SearchContext";
import { getSearchResults } from "../services/ExternalAPIService";

const Search = () => {
  const { search, setSearch } = useContext(AppbarContext);
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    getSearchResults(search)
      .then((res) => setSearchResults(res.data.results))
      .catch((err) => console.error(err));

    navigate("/search");
  };

  useEffect(() => {
    let location = window.location.href;
    if (location == "http://localhost:8000/#/search" && !search) {
      window.history.back();
    }
  }, [search]);

  return (
    <div className="search-container">
      <SlMagnifier className="search-icon" />
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
