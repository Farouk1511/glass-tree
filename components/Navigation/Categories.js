import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Paper, Link } from "@mui/material";

const Categories = ({ sections }) => {
  return (
    <>
      {/* Categories */}
      <Paper elevation={0}>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            justifyContent: "space-between",
            overflowX: "auto",
            margin: 25,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{
                p: 1,
                flexShrink: 0,
                fontFamily: "rockwell",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": {
                  borderBottom: 4,
                  borderColor: "secondary.main",
                  color: "gray",
                },
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Paper>
    </>
  );
};

Categories.PropTypes = {
  section: PropTypes.array.isRequired,
};

Categories.defaultProps = {
  section: [
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
  ],
};

export default Categories;
