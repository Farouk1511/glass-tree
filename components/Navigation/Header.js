import React from "react";
import Categories from "./Categories";
import NavBar from "./NavBar";

const Header = ({ handleSearch, sections }) => {
  return (
    <>
      {/* Nav */}
      <NavBar handleSearch={handleSearch} />

      {/* Categories */}
      <Categories sections={sections} />
    </>
  );
};

export default Header;
