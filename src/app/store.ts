import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipe/recipeSlice"
import filterSlice from './features/filters/filterSlice'

export const store = configureStore({
    reducer: {
        recipes: recipeSlice,
        filters: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch