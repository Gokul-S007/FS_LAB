import CreateNoteroute from './routes/Noteroute.js';
// install neccessary modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';


//Intialize app
 const app = express();

dotenv.config();

 //specify port
 const PORT=3000

//mongo db connection
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





 //use the morgan middleware
//  app.use(morgan('combined'));
//  app.use(morgan('common'));
//  app.use(morgan('dev'));
//  app.use(morgan('short'));
app.use(morgan('tiny'));
app.use(express.json());


app.use('/createNote',CreateNoteroute)

app.get('/',(req,res)=>{
    res.send("MY NOTES LOGGING APPLICATION")
})




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

 app.listen(PORT,()=>{
    console.log(`Server is running at port${PORT}`);
    console.log("Connected to Backend");
    connect()
 })
