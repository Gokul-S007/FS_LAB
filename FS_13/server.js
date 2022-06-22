//     ADVENTURE TRAILS APPLICATION
import express from 'express'
import dotenv from 'dotenv'
import Bookroutes from './routes/bookroute.js'
import mongoose from 'mongoose'
const app=express();

dotenv.config()

const PORT=process.env.PORT || 8080

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  app.use(express.json());

  app.use('/books',Bookroutes)


app.listen(PORT,()=>{
    console.log(`The Server is running at ${PORT}`);
    console.log("Connected to Backend");
    connect()
})