import {createSelector} from 'reselect';
import {AppRootState} from '../../../lib/types/screen';

const selectorOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePopularDishes = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveNewDishes = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveTopUsers = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
);