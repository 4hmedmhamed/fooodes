import mongoose from "mongoose"

export const connectDB = async () =>{
    // mongodb+srv://MERN_DOC:jEvGWaFn1qDFsNPz@cluster0.olob9hv.mongodb.net/?
    // # mongodb+srv://MERN:85TOSMMztjflx5AZ@mern.jazfezv.mongodb.net/MERN-Ecommerce?retryWrites=true&w=majority&appName=MERN
// 
    await mongoose.connect("mongodb+srv://MERN:85TOSMMztjflx5AZ@mern.jazfezv.mongodb.net/MERN-Ecommerce").then(()=>console.log("DB conneccted"))
}