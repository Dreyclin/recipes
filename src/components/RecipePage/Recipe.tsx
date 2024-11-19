import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Ingredients from './Ingredients'
import { Link, useParams } from 'react-router-dom'
import RecipeText from './RecipeText'
import useGetMeals from '../../hooks/useGetMeals'
import { Meal } from '../../app/features/recipe/recipeTypes'

const Recipe = () => {
    const {id} = useParams();
    
    const {mealState} = useGetMeals()
    const [meal, setMeal] = useState<Meal>()
    useEffect(() => {
        if (mealState && mealState.meals && mealState.meals.length > 0) {
            const mealById = mealState.meals.filter(meal => meal.id == Number(id));
            setMeal(mealById[0])
        }
    }, [mealState, id]);
    return (
        <div className='w-4/5 mx-auto py-5 relative'>
            <Header />
            <Link to="/">Назад</Link>
            <div className="recipe_container flex-col sm:flex-row flex justify-between gap-4">
                {meal && <Ingredients description={meal.description} image={meal.image} ingredients={meal.ingridients} measures={meal.measures} /> }
                {meal && <RecipeText description={meal.description} image={meal.image}/>}
            </div>
        </div>
    )
}

export default Recipe