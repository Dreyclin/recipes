import { createAsyncThunk } from "@reduxjs/toolkit";
import { Meal } from "./recipeTypes";

export const getMeal = createAsyncThunk(
    'recipe/getMeal',
    async (_,thunkAPI) => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            const data = await response.json();
            console.log(data.meals[0].idMeal);
            const mealId = data.meals[0].idMeal;
            const mealName = data.meals[0].strMeal;
            const mealCategory = data.meals[0].strCategory;
            const mealDescription = data.meals[0].strInstructions;
            const mealImage = data.meals[0].strMealThumb;
            const mealIngredients = Object.keys(data.meals[0]).filter(key => key.startsWith('strIngredient') && data.meals[0][key]).map(key => data.meals[0][key])
            const mealMeasures = Object.keys(data.meals[0]).filter(key => key.startsWith('strMeasure') && data.meals[0][key]).map(key => data.meals[0][key])
            const mealData: Meal = {
                id: mealId,
                category: mealCategory,
                description: mealDescription,
                image: mealImage,
                ingridients: mealIngredients,
                meal: mealName,
                measures: mealMeasures
            }
            return mealData
        } catch (error) {
            const err = error as Error
            return thunkAPI.rejectWithValue(err.message)
        }
      
    }
)