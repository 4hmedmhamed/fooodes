import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js"
import orderRouter from "./routes/orderRouter.js"
const app = express()

const port = process.env.Port;

app.use(express.json())
app.use(cors())

// db
connectDB();

//api 

app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter )

app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req , res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server ${port}`)
})