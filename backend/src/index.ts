import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
import connectDB from './utils/connectDB';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Routes
app.use('/api/', routes);

app.get('/api/', (req, res) => {
    res.send('<h1>Server is running...</h1>');
});
// Connect to the database and start the server
const mongoURI = process.env.MONGO_URI as string;
connectDB(mongoURI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch((error: Error) => {
    console.error('Error connecting to the database:', error);
});
