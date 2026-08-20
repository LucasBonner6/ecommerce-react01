import React from "react";
import "../search/Search.css";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className="searchBox w-full h-12.5 bg-[#e5e5e5] rounded-[5px] relative p-2 flex items-center">
      <input
        type="text"
        placeholder="Buscar Produtos"
        className="w-full h-8.75 focus:outline-none bg-inherit pl-4 pr-2 text-[15px] landing-normal"
      />
      <button className="mr-1 cursor-pointer shrink-0 text-black hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full">
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default Search;
