import { createSlice } from "@reduxjs/toolkit";
import { MealInitial } from "./recipeTypes";
import { getMeal } from "./recipeThunks";

const initialState: MealInitial = {
    meals: [],
    status: "idle",
    error: null
}

const recipeSlice = createSlice({
    name: "recipe",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMeal.pending, state => {
                state.status = "pending"
            })
            .addCase(getMeal.fulfilled, (state, action) => {
                state.status = "successful"
                state.meals.push(action.payload);

            })
            .addCase(getMeal.rejected, (state, action) => {
                state.status = "error"
                if(action.payload)
                    state.error = action.payload as string
                else
                    state.error = "Something went wrong"
            })
    }
})

export default recipeSlice.reducer