import { useState } from "react";
import useGetMeals from "./useGetMeals";


const usePagination = () => {

    const {mealState} = useGetMeals()

    const [currentPage, setCurrentPage] = useState(1);
    const [mealsPerPage] = useState(5);
    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const currentMeals = mealState.meals?.slice(indexOfFirstMeal, indexOfLastMeal);
    const totalPages = Math.ceil((mealState.meals?.length || 0) / mealsPerPage);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return {currentMeals, totalPages, paginate, currentPage}
}

export default usePagination