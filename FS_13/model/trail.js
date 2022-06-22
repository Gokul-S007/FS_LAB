import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  package:{
    type:String,
  },
  author:{
    type:String
  },
  
});

export default mongoose.model("Book", BookSchema)
