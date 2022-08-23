import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  FormControl,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "../../../components/Navigation/NavBar";
import AddIcon from "@mui/icons-material/Add";
const Create = () => {
  return (
    <>
      <NavBar />
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Typography sx={{ fontSize: 40, fontFamily: "rockwell" }}>
          Create a Service
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
          <Typography
            sx={{ fontSize: 15, fontFamily: "rockwell", fontWeight: 600 }}
          >
            Ad Details
          </Typography>
        </Box>
        <Divider variant="fullWidth" />

        <FormControl
          sx={{
            marginTop: 5,
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="title"
            label="Title"
            placeholder="Cleaning Service"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="ratePerHour"
            label="Rate Per Hour"
            placeholder="$50"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: 5,
              borderWidth: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: 2, borderRadius: 0 },
              },
            }}
            required
            id="description"
            label="Description"
            onChange={(e) => setUsername(e.target.value)}
            multiline
            rows={4}
          />
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "flex-start", width: "80%" }}>
          <Typography
            sx={{ fontSize: 15, fontFamily: "rockwell", fontWeight: 600 }}
          >
            Media
          </Typography>
        </Box>
        <Divider variant="fullWidth" />

        <Card
          sx={{
            marginTop: 5,
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border:2,
            height:'15vh'
          }}
        elevation={0}>
          <CardActionArea sx={{width:"100%",height:'100%',display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",}}>
           <CardContent>
          
              <AddIcon fontSize="large"/>
           
           </CardContent>
          </CardActionArea>
        </Card>

        <Button variant="contained" color="secondary" sx={{width:"10%", marginTop:10}} >Create</Button>
      </Paper>
    </>
  );
};

export default Create;
