import Header from './components/Header/Header';
import Pagination from './components/AllRecipes/Pagination';
import Item from './components/AllRecipes/Item';
import useGetMeals from './hooks/useGetMeals';
import { useState } from 'react';

function App() {

  const { mealState, loading, error } = useGetMeals();

  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(5);
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = mealState.meals?.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil((mealState.meals?.length || 0) / mealsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-4/5 mx-auto py-5 relative">
      <Header />
      <div className="flex justify-between gap-5 flex-wrap items-stretch">
        {loading ? <p className='text-3xl'>Loading...</p> : currentMeals && currentMeals.map(meal => meal.id && meal.description && meal.image && meal.meal ? (
          <Item
            key={meal.id}
            id={meal.id}
            description={meal.description}
            image={meal.image}
            meal={meal.meal}
          />
        ) : error ? <p>Error</p> : null)}
      </div>
      {!loading && <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          paginate={paginate}/>}
    </div>
  );
}

export default App;
