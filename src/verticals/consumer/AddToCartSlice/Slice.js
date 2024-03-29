import { createSlice } from "@reduxjs/toolkit";

const initialState=[{}];
export const addToCartSlice=createSlice({
  name:"addToCart",
  initialState,
  reducers:{
    add:(state,actions)=>{
    state.push(actions.payload);
    },
    deleteItem:(state,actions)=>{
      console.log("item is deleted")
      const removeItemId=actions.payload;
      return state.filter((item)=> item.id!==removeItemId);
    }
  }

})

export default addToCartSlice.reducer;
export const {add,deleteItem} =addToCartSlice.actions;