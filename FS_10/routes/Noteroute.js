import express from 'express';
const router = express.Router();
import { createNote, getNote } from "../controllers/logging.js";
// import Notes from "../models/notes";

router.post('/',createNote)

router.get('/:id',getNote)

export default router;