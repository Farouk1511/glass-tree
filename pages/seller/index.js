import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Link,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  Divider,
  CardHeader,
  CardActions,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import HelperProfile from "../../components/Helper/HelperProfile";
import NavBar from "../../components/Navigation/NavBar";
import Categories from "../../components/Navigation/Categories";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const Seller = () => {
  return (
    <>
   <NavBar/>

      {/* Categories */}
      <Categories sections={sections}/>

      <HelperProfile/>
     
    </>
  );
};

export default Seller;
