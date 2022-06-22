import Book from "../model/trail.js"
import { createError } from "../utils/error.js";

//create book package
export const createBook = async (req, res, next) => {
    const newBook = new Book(req.body);
  
    try {
      const savedBook = await newBook.save();
      res.status(200).json(savedBook);
      res.send("You can now get the requested packages for your request")
    } catch (err) {
      next(createError(404,"Cannot create book"));
    }
  };

  //get books package
  export const getBook = async (req, res, next) => {
    try {
      const Book = await Book.findById(req.params.id);
      res.status(201).json(Book);
      res.send("New booking added for the POST request")
    } catch (err) {
      next(createError(404,"Cannot get  packages"));
    }
  };

  //get all 
  
export const getBooks = async (req, res, next) => {
    try {
      const Books = await Hotel.find()
      res.status(200).json(Books);
    } catch (err) {
      next(createError(404,"Invalid path"));
    }
  };