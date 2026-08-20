import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#ff5252",
    color: "white",
  },
}));

function Header() {
  return (
    <header>
      <div className="top-strip py-2 bg">
        <div className="container">
          <div className="flex items-center justify-center ">
            <div className="col1 w-[50%] text-center">
              <p className="text-[12px] font-medium">
                Descontos de até 50% em peças da nova coleção, por tempo
                limitado!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between ">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo.jpg" className="h-24 w-auto" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-medium"
                >
                  Login
                </Link>{" "}
                <span className="mx-2">|</span>
                <Link
                  to="/register"
                  className="link transition text-[15px] font-medium"
                >
                  Registre-se
                </Link>
              </li>

              <li>
                <IconButton aria-label="cart">
                  <StyledBadge>
                    <FaRegUser />
                  </StyledBadge>
                </IconButton>
              </li>

              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4}>
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
              </li>

              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4}>
                    <FiShoppingCart />
                  </StyledBadge>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
