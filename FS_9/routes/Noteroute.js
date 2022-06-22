import express from 'express';
const router = express.Router();
import { createNote } from "../controllers/logging.js";
// import Notes from "../models/notes";

router.post('/',createNote)


export default router;