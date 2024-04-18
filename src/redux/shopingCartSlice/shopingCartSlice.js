    import {createSlice} from '@reduxjs/toolkit';

    export const shopingCartSlice = createSlice({
        name: 'shopingCart',
        initialState: {
            status: 'idle',
            listCart: [],
            totalPrice: 0,
            orderSuccessMessage: []
        },
        reducers: {
            addCart: (state, action) =>{
                state.listCart.push(action.payload);
            },
            removeItem: (state, action) =>{
                const itemId = action.payload;
                state.listCart = state.listCart.filter(item => item.id !== itemId);
            },
            removeItems: (state, action) => {
                const itemIdsToRemove = action.payload;
                state.listCart = state.listCart.filter(item => !itemIdsToRemove.includes(item.id));
            },
            calculateTotalPrice: (state) => {
                state.totalPrice = state.listCart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            },
            setOrderSuccessMessage: (state, action) => {
                   state.orderSuccessMessage.push({...action.payload, date: new Date()})
            },
            // Reducer để xóa thông báo khi đặt hàng thành công
            clearOrderSuccessMessage: (state) => {
                state.orderSuccessMessage = '';
            }
        }
    });