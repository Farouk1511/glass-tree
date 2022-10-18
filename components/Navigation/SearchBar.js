import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    handleSearch(query);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(query);
    }
  };

  return (
    <Paper
      sx={{
        borderColor: "primary",
        width: 750,
        border: 1,
        borderRadius: 0,
        display: "flex",
      }}
      component={"form"}
      elevation={0}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Try "paint my fence"'
        onChange={(e) => handleChange(e)}
        onKeyDown={keyPress}
      />
      <IconButton
        sx={{
          borderRadius: 0,
          backgroundColor: "primary.main",
          color: "#fff",
        }}
        onClick={() => handleSearch(query)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
