import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { POSTER_IMG } from "env";
import { Typography, Box, Container } from "@mui/material";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { getShowById } from "../services/ExternalAPIService";
import {
  addUserList,
  getShowByShowId,
  removeUserList,
} from "../services/UserListService";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  getToken,
  getCurrentUser,
  destroySession,
} from "../services/UserService";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const Show = () => {
  const [show, setShow] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const { type, id } = useParams();
  const {
    name,
    first_air_date,
    title,
    overview,
    vote_average,
    poster_path,
    release_date,
    runtime,
    vote_count,
    backdrop_path,
    production_countries = [],
    genres = [],
    production_companies = [],
  } = show;
  const { setIsUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  let token = getToken();
  let user = getCurrentUser();

  const handleError = () => {
    destroySession();
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    if (token && user) {
      getShowByShowId(id, token)
        .then((res) => {
          if (res.data != "") {
            setIsAdd(true);
          } else {
            setIsAdd(false);
          }
        })
        .catch((err) => handleError());

      getShowById(type, id)
        .then((res) => setShow(res.data))
        .catch((err) => handleError());
    } else {
      handleError();
    }
  }, [id]);

  const getStrValue = (array, propName) => {
    let strVal = "";
    for (let i = 0; i < array.length; i++) {
      strVal += array[i][propName];

      if (i !== array.length - 1) {
        strVal += ", ";
      }
    }
    if (strVal.endsWith(",")) {
      strVal = strVal.slice(0, -1);
    }
    return strVal;
  };

  const countrieStr = getStrValue(production_countries, "name");
  const genresStr = getStrValue(genres, "name");
  const companiesStr = getStrValue(production_companies, "name");

  const handleAddToList = () => {
    if (token && user) {
      let payload = {
        userId: user.id,
        showId: id,
        poster: poster_path,
        title: title || name,
        type: type,
      };

      addUserList(user.id, payload, token)
        .then((res) => console.log("Show added to list"))
        .catch((err) => handleError());
    } else {
      handleError();
    }
  };

  const handleRemoveFromList = () => {
    if (token && user) {
      removeUserList(id, token)
        .then((res) => console.log("Removed from list"))
        .catch((err) => handleError());
    } else {
      handleError();
    }
  };

  return (
    <React.Fragment>
      <Appbar />
      <div className="show-container">
        <div
          className="bg-img"
          style={{
            backgroundImage: `url(${POSTER_IMG}${backdrop_path})`,
          }}
        ></div>

        <Container>
          <Box className="show-content-container">
            <Box className="left-show-container">
              <Box className="show-img">
                <img src={`${POSTER_IMG}${poster_path}`} alt={title} />
              </Box>
              <Box className="votes">
                <Typography variant="body2">
                  {vote_average} / {vote_count} voted
                </Typography>
              </Box>
            </Box>
            <Box className="right-show-container">
              <Box className="btn-container">
                {isAdd ? (
                  <button className="add-btn" onClick={handleRemoveFromList}>
                    <FiTrash2 />
                    Remove from List
                  </button>
                ) : (
                  <button className="add-btn" onClick={handleAddToList}>
                    <FiPlus />
                    Add to List
                  </button>
                )}
              </Box>
              <Typography variant="h4" sx={{ mb: 3 }}>
                {title || name}
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                {overview}
              </Typography>
              <Box className="details">
                <Box className="left-details">
                  <Typography paragraph sx={{ mb: 1 }}>
                    <strong>Released Date: </strong>
                    {release_date || first_air_date}
                  </Typography>
                  <Typography paragraph sx={{ mb: 1 }}>
                    <strong>Genre: </strong>
                    {genresStr}
                  </Typography>
                  <Typography paragraph sx={{ mb: 1 }}>
                    <strong>Production: </strong>
                    {companiesStr}
                  </Typography>
                </Box>
                <Box className="right-details">
                  <Typography paragraph sx={{ mb: 1 }}>
                    <strong>Duration: </strong>
                    {runtime || 30} min
                  </Typography>
                  <Typography paragraph sx={{ mb: 1 }}>
                    <strong>Country: </strong>
                    {countrieStr}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Show;
