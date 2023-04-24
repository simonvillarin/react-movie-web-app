import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import Card from "../components/Card";
import { UserListContext } from "../context/UserListContext";
import { POSTER_IMG } from "env";

const MyList = () => {
  const { userList } = useContext(UserListContext);

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
        FAVORITES
      </Typography>
      <div className="card-container">
        {userList.map((show) => (
          <Card
            key={show.showId}
            id={show.showId}
            poster={`${POSTER_IMG}${show.poster}`}
            title={show.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default MyList;
