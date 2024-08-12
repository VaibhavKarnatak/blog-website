import express from 'express';
import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { verifyToken } from '../utils/verifyUser.js';
import { createComment } from '../controllers/comment.controller.js';
const router = express.Router();


router.post('/create', verifyToken ,createComment);

export default router;