import {createSelector} from 'reselect';
import {AppRootState} from '../../../lib/types/screen';

const selectorHomePage = (state: AppRootState) => state.homePage;

export const selectorPopularDishes = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.popularDishes
);

export const selectorNewDishes = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.newDishes
);

export const selectorTopUsers = createSelector(
    selectorHomePage,
    (HomePage) => HomePage.topUsers
);