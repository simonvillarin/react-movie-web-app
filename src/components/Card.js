import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Card = ({ id, poster, title, type }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-image" onClick={() => navigate(`/${type}/${id}`)}>
        <img
          src={poster}
          alt={title}
          onClick={() => navigate(`/${type}/${id}`)}
        />
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
