import React from 'react';
import Header from './components/Header/Header';
import Item from './components/AllRecipes/Item';

function App() {
  return (
    <div className="w-4/5 mx-auto py-2 relative">
      <Header />
      <div className="flex justify-between flex-wrap">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default App;
