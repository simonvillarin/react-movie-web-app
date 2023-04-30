import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Skeleton, Box } from "@mui/material";
import { POSTER_IMG } from "env";
import { getSearchResults } from "../services/ExternalAPIService";
import { AppbarContext } from "../context/AppbarContext";
import { SearchContext } from "../context/SearchContext";
import Card from "../components/Card";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [loading, setLoading] = useState(false);
  const { search } = useContext(AppbarContext);
  const { searchResults, setSearchResults } = useContext(SearchContext);

  useEffect(() => {
    getSearchResults(search)
      .then((res) => setSearchResults(res.data.results))
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Appbar />
      <Container>
        {!loading ? (
          <Skeleton
            animation="wave"
            width="20%"
            sx={{ mt: 10, mb: 3, height: 60 }}
          >
            <Typography>.</Typography>
          </Skeleton>
        ) : (
          <Typography
            variant="h5"
            sx={{
              mt: 11,
              mb: 3,
              pl: 2,
              borderLeft: "4px solid  #ff4c4c",
              borderRadius: "0.25rem",
            }}
          >
            Searched: {search}
          </Typography>
        )}

        <div className="card-container">
          {!loading
            ? searchResults.map((show) => (
                <Box key={show.id}>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ height: 270, width: 208, borderRadius: 2 }}
                  ></Skeleton>

                  <Skeleton width="100%" sx={{ height: 35 }}>
                    <Typography>.</Typography>
                  </Skeleton>
                </Box>
              ))
            : searchResults.map(
                (show) =>
                  show.backdrop_path != null && (
                    <Card
                      key={show.id}
                      id={show.id}
                      poster={
                        `${POSTER_IMG}${show.poster_path}` ||
                        `${POSTER_IMG}${show.backdrop_path}`
                      }
                      title={show.title || show.name}
                      type={show.media_type}
                    />
                  )
              )}
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default SearchResults;
