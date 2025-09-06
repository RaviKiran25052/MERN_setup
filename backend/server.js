import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();
dotenv.config();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5050;
const environment = process.env.NODE_ENV || 'development';

// run the server using "npm run dev" command
app.listen(
	PORT,
	console.log(`Server running in ${environment} mode on port ${PORT}`)
); 