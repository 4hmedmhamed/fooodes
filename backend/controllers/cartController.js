import userModel from "../models/userModel.js"
  const url = "http://localhost:4000"
// add item to user cart 
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
     
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({ success: true, message: "added to cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

// remove items from user cart 

const removeFormCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: "remove from cart" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}


// fetch user cart data 
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}
export { getCart, removeFormCart, addToCart }