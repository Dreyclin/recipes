import React from 'react'
import Header from './Header/Header'
import useGetMeals from '../hooks/useGetMeals';
import usePagination from '../hooks/usePagination';
import Item from './AllRecipes/Item';
import Pagination from './AllRecipes/Pagination';

const HomePage = () => {

    const { loading, error } = useGetMeals();
    const { currentMeals, currentPage, totalPages, paginate } = usePagination();

  return (
    <div className="w-4/5 mx-auto py-5 relative">
    <Header />
    <div className="flex justify-between gap-5 flex-wrap items-stretch">
      {loading ? (
        <p className="text-3xl">Loading...</p>
      ) : error ? <p className='text-3xl'>{error}</p> : (
        currentMeals &&
        currentMeals.map(
          (meal) =>
            meal.id &&
            meal.description &&
            meal.image &&
            meal.meal && (
              <Item
                key={meal.id}
                id={meal.id}
                description={meal.description}
                image={meal.image}
                meal={meal.meal}
              />
            )
        )
      )}
    </div>
    {!loading && (
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    )}
  </div>
  )
}

export default HomePage