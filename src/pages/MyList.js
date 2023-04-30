import React, { useContext, useState, useEffect } from "react";
import { Container, Typography, Skeleton, Box } from "@mui/material";
import { POSTER_IMG } from "env";
import { getUserListById } from "../services/UserListService";
import {
  getToken,
  getCurrentUser,
  destroySession,
} from "../services/UserService";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const MyList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setIsUserLoggedIn } = useContext(UserContext);

  let token = getToken();
  let user = getCurrentUser();

  const handleError = () => {
    destroySession();
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    if (token && user) {
      getUserListById(user.id, token)
        .then((res) => setUserList(res.data))
        .catch((err) => handleError());
    } else {
      handleError();
    }

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
            width="15%"
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
            FAVORITES
          </Typography>
        )}

        <div className="card-container">
          {!loading
            ? userList.map((show) => (
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
            : userList.map((show) => (
                <Card
                  key={show.showId}
                  id={show.showId}
                  poster={`${POSTER_IMG}${show.poster}`}
                  title={show.title}
                  type={show.type}
                />
              ))}
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default MyList;
