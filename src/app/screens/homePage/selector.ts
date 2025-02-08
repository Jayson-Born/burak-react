import {createSelector} from 'reselect';
import {AppRootState} from '../../../lib/types/screen';

const selectorHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.topUsers
);