import express from 'express';
const router = express.Router();
import { createNote, deleteNote, getNote, updateNote } from "../controllers/logging.js";
// import Notes from "../models/notes";

router.post('/',createNote)

router.get('/:id',getNote)

 router.put('/:id',updateNote)

export default router;