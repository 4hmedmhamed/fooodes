import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'

import "./placeOrder.css"
import axios from 'axios'
function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItmes, url } = useContext(StoreContext)
  const [data, setData] = useState({
    fristName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHander = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  // useEffect (()=>{
  //  console.log(data)
  // },[data])


  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItmes[item._id]>0){
        let itemInfo  =item ; 
        itemInfo["quantity"] = cartItmes[item._id];
         orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let  response  = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
     if(response.data.success) {
       const {session_url} = response.data;
       window.location.replace(session_url);
      }else
      {
      //  const {session_url} = response.data;
      //  window.location.replace(session_url);
      alert("error")
      // console.log(response.data)
     }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
     navigate("/cart");
    }else if(getTotalCartAmount()===0){
navigate("/cart")
    }
 } ,[token])
  return (
    <form className='pace-order' onSubmit={placeOrder}>
      <div className='place-order-left'>
        <p className='title'>
          defvkfdpv gkblkgtb
        </p>
        <div className='multi-fields'>
          <input required  type='text' name="fristName" value={data.fristName} onChange={onChangeHander} placeholder='fristnamr' />
          <input required  type='text' name="lastName" value={data.lastName} onChange={onChangeHander} placeholder='lastname' />
        </div>
        <input required  type='text' name="email" value={data.email} onChange={onChangeHander} placeholder='email address' />
        <input required  type='text' name="street" value={data.street} onChange={onChangeHander} placeholder='Street' />
        <div className='multi-fields' >
          <input required  type='text' name="city" value={data.city} onChange={onChangeHander} placeholder='city' />
          <input required  type='text' name="state" value={data.state} onChange={onChangeHander} placeholder='state' />
        </div>
        <div className='multi-fields' >
          <input required  type='text' name="zipcode" value={data.zipcode} onChange={onChangeHander} placeholder='zip code' />
          <input required  type='text' name="country" value={data.country} onChange={onChangeHander} placeholder='country' />
        </div>
        <input required  type='text' name="phone" value={data.phone} onChange={onChangeHander} placeholder='phone' />
      </div>
      <div className="place-order-right">
        <h2>cart totoal</h2>
        <div>
          <div className='cart-total-datails'>
            <p>Sublty</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>devilrtyy free</p>
            <p>${2}</p>
          </div>
          <div className='cart-total-datails'>
            <p>Sublty</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
  <button  type='submit'> payment order</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder