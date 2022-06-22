import express from 'express';
const router = express.Router();
import { createNote, deleteNote, getNote, updateNote } from "../controllers/logging.js";
// import Notes from "../models/notes";
//routes
router.post('/',createNote)

router.get('/:id',getNote)

 router.put('/:id',updateNote)

 router.delete('/:id',deleteNote)

export default router;