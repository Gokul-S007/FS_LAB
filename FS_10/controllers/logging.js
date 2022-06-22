import Notes from "../models/notes.js";




//create
export const createNote = async (req, res, next) => {
    const newNote = new Notes(req.body);
  
    try {
      const savedNote = await newNote.save();
      res.status(200).json(savedNote);
    } catch (err) {
      next(err);
    }
  };

//get
export const getNote = async (req, res, next) => {
  try {
    const Note = await Notes.findById(req.params.id);
    res.status(200).json(Note);
  } catch (err) {
    next(err);
  }
};