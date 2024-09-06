import React, { useEffect, useState } from 'react'
import './Add.css'
import upload from "../../assets/1.jpg"
import axios from 'axios' ;
// import { toast } from 'react-toastify';

function Add() {
  const url = "http://localhost:4000"
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  
  const onSubmitHandler = async (event) => {
 event.preventDefault();
const formData = new FormData();
formData.append("name",data.name)
formData.append("description",data.description)
formData.append("price",Number(data.price))
formData.append("category",data.category)
formData.append("image",image) 
const response =await axios.post(`${url}/api/food/add`,formData);
if(response.data.success) {
   setData({
    name: "",
    description: "",
    price: "",
    category: "Salad"
   })
   setImage(false)
  //  toast.success(response.data.message)
   console.log("Successs")
  }else{
  // toast.error(response.data.message)
  console.log("false")
}
}
  return (
    <div className='add'>
      <form action='' className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>

            <img src={image ? URL.createObjectURL(image) : upload} style={{ width: "100px", height: "100px" }} />
          </label>
          <input type="file" id='image' hidden  onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <div className='add-product-name flex-col'>
          <p>product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' id='name' placeholder='type here' required />
        </div>
        <div className="add-product-description flex-col">
          <p>product</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' id="" rows="6" placeholder='write conect here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>prodect catogaery</p>
            <select name='category' id="" onChange={onChangeHandler} value={data.category} >
              <option value="Salsd">Salsd</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwitch">Sandwitch</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
            </select>
          </div>
          <div className="add-price felx-col">
            <p >product price</p>
            {/* <input value={data.price} type="text" placeholder='$20' /> */}
            <input onChange={onChangeHandler} value={data.price} placeholder='$20' type='Number' name='price' />
          </div>

          <button type='subment' className='add-btn'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Add