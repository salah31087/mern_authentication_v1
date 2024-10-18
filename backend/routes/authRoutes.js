// routes/authRoutes.js
import express from 'express';
import { register, login, refreshToken, logout, getUser } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);
router.get('/user', authenticateToken, getUser);

export default router;