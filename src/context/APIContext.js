import React, { useState, useEffect, createContext } from "react";
import { API_KEY } from "env";
import { getShows } from "../services/APIService";
import axios from "axios";

export const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getShows("all")
      .then((res) => setTrending(res.data.results))
      .catch((err) => console.error(err));
    getShows("movie")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
    getShows("tv")
      .then((res) => setSeries(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <APIContext.Provider
      value={{ trending, movies, series, searchResults, setSearchResults }}
    >
      {children}
    </APIContext.Provider>
  );
};
