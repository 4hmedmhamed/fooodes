import React, { useEffect } from 'react'
import "./Order.css"
import { useState } from 'react';
import axios from "axios"

function Order() {
// console.log(url)
  const url  = "http://localhost:4000";
const [orders , setOrders] = useState([]);

const  fetchAllOrders = async() =>{
  const response =await axios.get("http://localhost:4000/api/order/list")
  if(response.data.success){
    setOrders(response.data.data);
    // console.log(response.data.data)
  }else{
    alert="erorr"
  }
}


const statusHandler =async(event ,orderId) =>{
const response  = await axios.post("http://localhost:4000/api/order/status",{
  orderId,
  status:event.target.value
})

console.log( orderId,
  event.target.value)
  // console.log(response)
// 
if(response.data.success){
  setOrders(response.data.data);
  console.log(response.data.success)
}else{
  // console.log(error)
}
}
useEffect(()=>{
 fetchAllOrders();
},[])

  return (
    <div className='order add'>
     <h3>order page</h3>
     <div className="order-list">
       <p>kcdlkm</p>
      {orders.map((order ,index)=>(
        <div key={index} className='order-item'>
     {/* <img src={} alt='' /> */}
     <div>
      <p className='order-item-food'>
        {order.items.map((item,index)=>{
          if(index===order.items.length-2){
            return item.name + "x" + item.quantity  
          }else{
                   return item.name + "x" + item.quantity  +" ,"

                 }
        })}
      </p>
       <p className='order-item-name'>{order.address.fristName+""+order.address.lastName}</p>
       <p className="order-item-address">
        <p> {order.address.street}</p>
        <p>{order.address.city+", "+order.address.state+", "+order.address.country+","+order.address.zipcode}</p>
       </p>
     </div>
     <p className='order-item-phone'>{order.address.phone}</p>
  <p > Items : {order.items.length}</p>
  <p>${order.amount}</p>
  <select 
  onChange={(event)=>statusHandler(event,order._id)} value={order.status}
  >
    <option value="food processing">food processing</option>
    <option value="out of delivry">out of delivry</option>
    <option value="Delivery">Delivery</option>
  </select>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Order