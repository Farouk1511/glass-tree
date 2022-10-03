import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import NavBar from '../Navigation/NavBar'
const Mockup = () => {

    return (
        <>
        <NavBar/>
            <Container maxWidth={"lg"} sx={{
                backgroundColor:'#0000',
                width:100,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center'

            }}>
                <Box sx={{width:'30%'}}><Typography>Hello hi</Typography></Box>
                <Box sx={{width:'70%'}}><Typography>Hello</Typography></Box>
            </Container>
        </>
    )
}

export default Mockup