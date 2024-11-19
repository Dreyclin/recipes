import { Routes, Route } from 'react-router-dom';
import Recipe from './components/RecipePage/Recipe';
import HomePage from './components/HomePage';

function App() {


  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/details/:id" element={<Recipe />} />
      </Routes>
  );
}

export default App;