import Container from "@mui/material/Container/Container";
import React, { useEffect } from "react";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Events from "./Events";

export default function HomePage(){
    // Selector: Store=> Data

    useEffect(() => {
        //Backend server data request => Data
        // Slice: Data => Store
    }, []);

    return <div className={"homepage"}>
        <Statistics/>
        <PopularDishes/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>

    </div>
}