import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipe/recipeSlice"

export const store = configureStore({
    reducer: {
        recipes: recipeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch