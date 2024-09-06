import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
// import toast from "react-toastify"
function List() {
  
  const url = "http://localhost:4000"

const [list , setList]  = useState([]);

const fetchList = async () =>{
  const response = await axios.get(`${url}/api/food/list`);
  // console.log(response.data)
  if(response.data.success){
    setList(response.data.data);
  }else{
    // toast.error("Error");
  }
}
const removeFood = async(foodId)=>{
 console.log(foodId) 
const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
await fetchList();
if(response.data.success) {
  setList(response.data.data)
}else{
  
}
}
useEffect(()=>{
  fetchList();
})
  return (
    <div className='list add flex-col'>
      <p>All foods</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>image</b>
          <b>name</b>
          <b>Catogery</b>
          <b>price</b>
          <b>action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div className='list-table-format' key={index}>
               <img src={`${url}/image/`+item.image} alt='' style={{width:"50px" , height:"50px"}}   />
               <p>{item.name} </p>
               <p>{item.category} </p>
               <p>{item.price} </p>
               <p   onClick={()=>removeFood(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default List