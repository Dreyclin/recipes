import { createSlice } from "@reduxjs/toolkit";
import { FilterInitial } from "./filterTypes";


const initialState: FilterInitial = {
    filters: [],
    error: null,
    status: "idle"
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        loadFilters(state, action) {
            state.filters.push(action.payload)
        }
    }
})

export const {loadFilters} = filterSlice.actions

export default filterSlice.reducer