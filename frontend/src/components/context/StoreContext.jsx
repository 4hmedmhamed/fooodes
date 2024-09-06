import { createContext, useEffect, useState } from "react";
// import { food_list } from "../../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItmes, setCartItmes] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])


    const addToCart =  async (itemId) => {
        if (!cartItmes[itemId]) {
            setCartItmes((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItmes((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItmes((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url="/api/cart/remove ",{itemId},{headers:{token}})

        }
    }

    // useEffect(()=>{
    //  console.log(cartItmes);
    // },[cartItmes])




    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItmes) {
            if (cartItmes[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItmes[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }
    const loadcartData = async (token) =>{
  const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
setCartItmes(response.data.cartData)    
}
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            await loadcartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])
    const ContextValue = {
        food_list
        , cartItmes
        , setCartItmes
        , addToCart
        , removeFromCart
        , getTotalCartAmount
        , url
        , token
        , setToken
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider 