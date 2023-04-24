import React, { useContext, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../context/APIContext";
import { AppbarContext } from "../context/AppbarContext";
import { getSearchResults } from "../services/APIService";

const Search = () => {
  const { search, setSearch, location } = useContext(AppbarContext);
  const { setSearchResults } = useContext(APIContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    getSearchResults(search)
      .then((res) => setSearchResults(res.data.results))
      .catch((err) => console.error(err));

    navigate("/search");
  };

  useEffect(() => {
    if (!search) {
      let loc = localStorage.getItem("location");
      if (loc) {
        navigate(loc);
      } else {
        navigate("/home");
      }
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
