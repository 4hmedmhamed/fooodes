import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDawonload from '../../components/AppDawonload/AppDawonload';
function Home() {
  const [category  , setCategory] =useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu  category={category}  setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDawonload></AppDawonload>
    </div>
  )
}

export default Home