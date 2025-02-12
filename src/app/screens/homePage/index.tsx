import Container from "@mui/material/Container/Container";
import React, { useEffect } from "react";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Events from "./Events";
import "../../../css/home.css";

import{useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const PopularDishesRetrieve = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({popularDishes})
);

export default function HomePage(){
    const {setPopularDishes} = actionDispatch(useDispatch());
    const popularDishes = useSelector(PopularDishesRetrieve);
    
 console.log(process.env.REACT_APP_API_URL);
    useEffect((
        // 
    ) => {}, []);


    return <div className={"homepage"}>
        <Statistics/>
        <PopularDishes/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>

    </div>
}