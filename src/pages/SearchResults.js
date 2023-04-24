import React, { useContext } from "react";
import Card from "../components/Card";
import { Container, Typography } from "@mui/material";
import { APIContext } from "../context/APIContext";
import { AppbarContext } from "../context/AppbarContext";
import { POSTER_IMG } from "env";

const SearchResults = () => {
  const { searchResults } = useContext(APIContext);
  const { search } = useContext(AppbarContext);

  return (
    <Container>
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
      <div className="card-container">
        {searchResults.map(
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
              />
            )
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
