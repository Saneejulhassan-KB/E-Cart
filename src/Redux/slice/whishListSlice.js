import { createSlice } from "@reduxjs/toolkit";

const whishListSlice = createSlice({
    name: "whishList",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = whishListSlice.actions
export default whishListSlice.reducer