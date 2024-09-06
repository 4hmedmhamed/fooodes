import React, { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';




const  Cart=()=> {
  const { cartItmes , removeFromCart ,getTotalCartAmount , food_list , url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr />
       
        {
          food_list.map((item, index) => {
            if (cartItmes[item._id] > 0) {
              return (
                <div>
                  <div className=' cart-items-title cart-items-item'>
                    <img src={url+"/image/"+item.image} style={{width:"200px"}} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItmes[item._id]} </p>
                    <p>{item.price * cartItmes[item._id]} </p>
                    <p onClick={() => removeFromCart(item._id)}>x</p>
                  </div>
                  <div>
                    <h2>
                      crt total
                    </h2>
                    <div>
                      <div className="cart-total-detaials">
                        <p>{getTotalCartAmount()}</p>
                        <p>{0}</p></div>
                      <div className="cart-total-detaials">
                        <p>{2}</p>
                      </div>
                      <div className="cart-total-detaials">
                        <p>total</p>
                        <p>{getTotalCartAmount()+5}</p>
                      </div>
                    </div>
                    <button onClick={()=>navigate("/order")}>Prodeuct to check </button>
                  </div>
                  <div className='cart-promocode'>
       <div><p>

        if you have a promo code enter  in the here 
       </p>
       <div className='cart-promocode-input'> 
        <input type='text ' placeholder='promo code ' />
        <button >subment </button>
       </div>
       </div>
                  </div>
                </div>

              )
            }
          })}
          
          {console.log(getTotalCartAmount())}
      </div>

    </div>
  )
}

export default Cart





//   const applicants = [ {
//     name: 'Joe', work: 'freelance-developer',
//     blogs: '54', websites: '32',
//     hackathons: '6', location: 'morocco', id: '0',
//   },
//   {
//     name: 'janet', work: 'fullstack-developer', 
//     blogs: '34', websites: '12', 
//     hackathons: '8', location: 'Mozambique', id: '1',
//   },

// ];

// function App() {
//   return (
//     <>
//     {applicants.map(function(data) {
//       return (
//         <div>
//           Applicant name:  {data.name}
//         </div>
//       )
//     })}
//     </>

//   )
// }
// export default App;