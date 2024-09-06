import React, { useContext, useState } from 'react'
import "./Fooditem.css" 
import Add from "../../assets/add.jpeg"
import { StoreContext } from '../context/StoreContext'
function Fooditem({
    id ,
    name,
    Image,
    price,
    description,
    category
}) {

    const [itemCount , setItemcount] = useState(0)
    const { 
        cartItmes
      ,setCartItmes
      ,addToCart 
      ,removeFromCart
    ,url
  } =useContext(StoreContext)

  return (
    <div className='food-item'>
          {/* <div className='food-item-img-container'>
            <img className='food-item-image'  src={Image} style={{width:"100%"}}/>
            {!itemCount
   ?<img className='add' onClick={()=>setItemcount(prev=>prev+1)}  src={Add} style={{width:"30px"}}  />:
   <div className='food-item-counter '>
    <p  onClick={()=>setItemcount(prev=>prev-1)}   className='img'>---</p>
    <p>{itemCount}</p>
    <p onClick={()=>setItemcount(prev=>prev+1)}  className='img' >-+-</p>
   </div>
            }
          </div> */}
          <div className='food-item-img-container'>
            <img className='food-item-image'  src={url+"/image/"+Image} style={{width:"100%"}}/>
            {!cartItmes[id]
   ?<img className='add' onClick={()=>addToCart(id)}  src={Add} style={{width:"30px"}}  />:
   <div className='food-item-counter '>
    <p  onClick={()=>removeFromCart(id)}   className='img'>---</p>
    <p>{cartItmes[id]}</p>
    <img className='add' onClick={()=>addToCart(id)}  src={Add} style={{width:"30px"}}  />
   </div>
            }
          </div>
          <div className='food-item-info'>
            <div className="food-item-name-rating">

            <p>{name}</p>
            {/* <img  src={Image}></img> */}
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price} </p>
          </div>
    </div>
  )
}

export default Fooditem