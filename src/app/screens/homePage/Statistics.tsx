import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";

export default function Statistics(){
    return(
        <div className={"static-frame"}>
            <Container>
               <Stack className= "info">
               <Stack className="static-box">
                    <Box className="static-num">12</Box>
                    <Box className="static-text">Restaurant</Box>
                </Stack>

                <Divider sx={{ height: "64px", width: "2px", backgroundColor: "#E3C08D" }}/>

                <Stack className="static-box">
                    <Box className="static-num">8</Box>
                    <Box className="static-text">Expreience</Box>
                </Stack>

                <Divider sx={{ height: "64px", width: "2px", backgroundColor: "#E3C08D" }}/>

                <Stack className="static-box">
                    <Box className="static-num">50+</Box>
                    <Box className="static-text">Menu</Box>
                </Stack>

                <Divider sx={{ height: "64px", width: "2px", backgroundColor: "#E3C08D" }}/>

                <Stack className="static-box">
                    <Box className="static-num">200+</Box>
                    <Box className="static-text">Client</Box>
                </Stack>

               </Stack>
            </Container>
        </div>
    );
}