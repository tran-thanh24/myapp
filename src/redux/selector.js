import { createSelector } from "@reduxjs/toolkit";

export const selectCartItem = state => state.shopingCart.listCart;
export const selectNotification = state => state.shopingCart.orderSuccessMessage;