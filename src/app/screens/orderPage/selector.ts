import {createSelector} from 'reselect';
import {AppRootState} from '../../../lib/types/screen';

const selectorOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
    selectorOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
);