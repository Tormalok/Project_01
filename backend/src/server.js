import express from 'express';
import cors from 'cors';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

// Ports
const port = process.env.PORT || 5000;

// Connecting to database
// connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(`Server running in production mode on port ${port}`);
  } else {
    console.log(`Server running in development mode on port ${port}`.yellow);
  }
});
