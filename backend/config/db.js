import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://yashdeshmukh621:Yash54321pawar@quickbite.pozcome.mongodb.net/?retryWrites=true&w=majority&appName=Quickbite').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.