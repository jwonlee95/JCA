import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, IconButton } from "@mui/material";
import { IMAGES } from "assets/images";


export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav>
      <div className="logo">
        <img src={IMAGES.logo} alt="logo" onClick={handleClickLogo} />
      </div>
    </nav>
  );
};