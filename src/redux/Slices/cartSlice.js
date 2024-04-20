import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
   name: 'cart',
   initialState: [],
   reducers: {
      addProduct: () => {

      },
      removeProduct: () =>{

      },
   }
}) 

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer