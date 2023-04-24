import React, { useContext } from "react";
import Card from "../components/Card";
import { Container, Typography } from "@mui/material";
import { APIContext } from "../context/APIContext";
import { POSTER_IMG } from "env";

const Series = () => {
  const { series } = useContext(APIContext);
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
        BINGE WORTHY TV SERIES
      </Typography>
      <div className="card-container">
        {series.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            poster={
              `${POSTER_IMG}${show.poster_path}` ||
              `${POSTER_IMG}${show.backdrop_path}`
            }
            title={show.title || show.name}
          />
        ))}
      </div>
    </Container>
  );
};

export default Series;
