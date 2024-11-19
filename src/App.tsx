import Header from './components/Header/Header';
import Pagination from './components/AllRecipes/Pagination';
import Item from './components/AllRecipes/Item';
import useGetMeals from './hooks/useGetMeals';

function App() {

  const { mealState, loading, error } = useGetMeals();

  return (
    <div className="w-4/5 mx-auto py-5 relative">
      <Header />
      <div className="flex justify-between gap-5 flex-wrap items-stretch">
        {loading ? <p className='text-3xl'>Loading...</p> : mealState && mealState.meals.map(meal => meal.id && meal.description && meal.image && meal.meal ? (
          <Item
            key={meal.id}
            id={meal.id}
            description={meal.description}
            image={meal.image}
            meal={meal.meal}
          />
        ) : error ? <p>Error</p> : null)}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
