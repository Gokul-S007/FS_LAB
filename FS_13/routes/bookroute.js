import express from "express";
import { createBook, getBook, getBooks } from "../controllers/book_crud.js";
import  Book from '../model/trail.js'

const router = express.Router();

router.post('/',createBook);

router.get('/package/:id',getBook);

router.get('/all',getBooks)

export default router;