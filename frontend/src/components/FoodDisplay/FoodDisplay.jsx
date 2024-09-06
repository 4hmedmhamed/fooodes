import React, { useContext } from 'react'
import "./FoodDisplay.css"
// import { food_list } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import Fooditem from '../fooditem/Fooditem'
function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>         top dishes near your </h2>   
             <div className="food-display-list">
                {                    food_list.map((item, index)=>{
                  if(category==="All" || category===item.category  ){
                   
                    return < Fooditem  key={index}   id={item._id} 
                    name ={item.name}
                    Image ={item.image}
                    price ={item.price}
                    description ={item.description}
                    category ={item.category}
                    />
                    
                  }
                    })
                }
             </div>

        </div>
  )
}

export default FoodDisplay