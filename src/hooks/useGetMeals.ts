import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import { getMeal } from "../app/features/recipe/recipeThunks";

const useGetMeals = () => {
    const dispatch: AppDispatch = useDispatch();
    const mealState = useSelector((state: RootState) => state.recipes);
    const [error, setError] = useState<string | null>(mealState.error)
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
      const fetchMeals = async () => {
        try {
          setLoading(true);
          for (let i = 0; i < 5; i++) {
            await dispatch(getMeal());
          }
        } catch (error) {
          const err = error as Error
          setError(err.message)
        } finally {
          setLoading(false)
        }
  
      };
      fetchMeals();
    }, [dispatch])
    
    return {mealState, error, loading}
}

export default useGetMeals