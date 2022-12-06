import {
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Error from "../components/Error/Error";

const FormPageLayout = ({children,error,setError}) => {
  return (
    <>
      {error && <Error message={error} closeFunc={() => setError("")} />}
      <Paper
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Paper
          sx={{
            width: "50%",
            backgroundColor: "primary.main",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "rockwell",
              fontWeight: 700,
              textDecoration: "none",
            }}
            variant="h1"
            component="a"
            href="/"
            color="primary"
            margin={"dense"}
          >
            GlassTree
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "rockwell",
              fontWeight: 400,
              textDecoration: "none",
            }}
            variant="h4"
            component="a"
            href="/"
            color="primary"
            margin={"dense"}
          >
            Ottawas First Service MarketPlace
          </Typography>
        </Paper>
        <Paper
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
          }}
        >
         {children}
        </Paper>
      </Paper>
    </>
  );
};

export default FormPageLayout;
