import { Box } from "@mui/material";
import { SlMagnifier } from "react-icons/sl";
import React, { useContext } from "react";
import { AppbarContext } from "../context/AppbarContext";
import { getSearchResults } from "../services/ExternalAPIService";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const MobileSearch = () => {
  const { showMobileSearch, search, setSearch } = useContext(AppbarContext);
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    getSearchResults(search)
      .then((res) => setSearchResults(res.data.results))
      .catch((err) => console.error(err));

    navigate("/search");
  };

  return (
    <Box
      className={`mobile-search-wrapper ${
        !showMobileSearch && "mobile-search-close"
      } `}
    >
      <Box className="mobile-search-container">
        <SlMagnifier className="mobile-search-icon" />
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search"
            className="mobile-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </Box>
    </Box>
  );
};

export default MobileSearch;
