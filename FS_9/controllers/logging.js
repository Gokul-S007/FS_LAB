import Notes from "../models/notes.js";





export const createNote = async (req, res, next) => {
    const newNote = new Notes(req.body);
  
    try {
      const savedNote = await newNote.save();
      res.status(200).json(savedNote);
    } catch (err) {
      next(err);
    }
  };