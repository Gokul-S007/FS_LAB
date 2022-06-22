import mongoose from "mongoose";
const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      id:{
        type:Number,
        required:true
      },
      subject:{
        type:String,
        required:true,
      },
      email:{
        type:String
      },
      mobile:{
        type:Number
      },
});

export default mongoose.model("Notes", NoteSchema)