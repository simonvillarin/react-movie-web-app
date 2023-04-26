import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { addUserList, removeUserList } from "../services/UserListService";
import { UserContext } from "../context/UserContext";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { UserListContext } from "../context/UserListContext";
import { AppbarContext } from "../context/AppbarContext";
import { Navigate, useNavigate } from "react-router-dom";

const Card = ({ poster, title, id }) => {
  const { userData, setIsUserLoggedIn } = useContext(UserContext);
  const { userList, setUserList } = useContext(UserListContext);
  const { search } = useContext(AppbarContext);
  const { location } = useContext(AppbarContext);

  const handleAxiosError = () => {
    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    }
    if (location) {
      localStorage.removeItem("location");
    }
    setIsUserLoggedIn(false);
    useNavigate("/login");
  };

  const handleAddToList = (id, poster, title) => {
    let payload = {
      userId: userData.id,
      showId: id,
      poster: poster,
      title: title,
    };

    addUserList(id, payload, userData.token)
      .then((res) => {
        if (res.status == 200) {
          let findShowId = userList.find((list) => list.showId == id);
          if (!findShowId) {
            setUserList([payload, ...userList]);
          }
        } else {
          handleAxiosError();
        }
      })
      .catch((err) => {
        handleAxiosError();
        console.log(err);
      });
  };

  const handleRemoveFromList = (id) => {
    removeUserList(id, userData.token)
      .then((res) => {
        if (res.status == 200) {
          let newUserList = userList.filter((list) => list.showId != id);
          setUserList(newUserList);
        } else {
          handleAxiosError();
        }
      })
      .catch((err) => {
        handleAxiosError();
        console.log(err);
      });
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={poster} alt={title} />
        {location != "/list" || search ? (
          <button
            className="card-btn"
            onClick={() => handleAddToList(id, poster, title)}
          >
            <MdAdd />
          </button>
        ) : (
          <button className="card-btn">
            <MdDeleteOutline onClick={() => handleRemoveFromList(id)} />
          </button>
        )}
      </div>
      <div className="card-content">
        <Typography variant="body2" className="card-title">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
