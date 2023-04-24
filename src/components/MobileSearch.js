import { Box } from "@mui/material";
import { SlMagnifier } from "react-icons/sl";
import React, { useContext } from "react";
import { AppbarContext } from "../context/AppbarContext";
import { APIContext } from "../context/APIContext";
import { getSearchResults } from "../services/APIService";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const { showMobileSearch, search, setSearch } = useContext(AppbarContext);
  const { setSearchResults } = useContext(APIContext);
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
