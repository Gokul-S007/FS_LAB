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

//update
export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteNote = async (req, res, next) => {
  try {
    await Notes.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("The Note has been deleted ");
  } catch (err) {
    next(err);
  }
};