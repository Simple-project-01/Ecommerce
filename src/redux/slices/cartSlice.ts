import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    productName: string;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

interface CartState {
    cartItems: CartItem[];
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
        },

        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
        
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
            }
        },
        
    },
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;