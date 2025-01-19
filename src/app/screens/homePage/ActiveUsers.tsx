
import React from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import {CssVarsProvider,Container, Typography, Box, Stack}  from "@mui/joy";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdpectRatio from "@mui/joy/AspectRatio"
import Card from "@mui/joy/Card"
import Divider from "../../components/divider";
 
const activeUsers = [
    {memberNick: "Martin", memberImage: "/img/martin.webp"},
    {memberNick: "Justin", memberImage: "/img/justin.webp"},
    {memberNick: "Rose", memberImage: "/img/rose.webp"},
    {memberNick: "Nusret", memberImage: "/img/nusret.webp"},
]

export default function ActiveUsers(){

    return (
    <div  className={"active-users-frame"}>
        <Container>
            <Stack  className={"main"}>
                <Box className={"category-title"}>Active Users</Box>
                <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                        {activeUsers.length !== 0 ? (
                            activeUsers.map((ele, index) => {
                                return(
                                    <Card  key= {index} variant="outlined" className={"card"}>

                       
                        
                                    <CardOverflow>
                                    <AdpectRatio ratio="1">
                                        <img src={ele.memberImage} alt="" />
                                    </AdpectRatio>
                                    </CardOverflow>
            
                                    <CardOverflow variant="soft" className="member-nickname">
                                        <Stack className="info">
                                            <Stack flexDirection={"row"}>
                                                <Typography className={"title"}>
                                                    {ele.memberNick}
                                                </Typography>
                                               
                                            </Stack>
                                            <Stack>
                                               
                                            </Stack>
                                        </Stack>
            
                                    </CardOverflow>
                                </Card>

                                )
                            })
                            
                        ) : (
                            <Box className="no-data">New products are not available!</Box>
                        )}
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>
    )
}