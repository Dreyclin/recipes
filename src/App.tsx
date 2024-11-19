import React from 'react';
import Header from './components/Header/Header';
import Item from './components/AllRecipes/Item';
import Pagination from './components/AllRecipes/Pagination';

function App() {
  return (
    <div className="w-4/5 mx-auto py-5 relative">
      <Header />
      <div className="flex justify-between gap-5 flex-wrap">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
