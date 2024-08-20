import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, IconButton } from "@mui/material";
import { IMAGES } from "assets/images";


export const NavBar: React.FC<{}> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={IMAGES.logo} alt="logo" onClick={handleClickLogo} />
      </div>
    </nav>
  );
};