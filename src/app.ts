import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv = require('dotenv');
import reviewRoutes from './routes/reviewRoutes';

const app = express();
const cors = require('cors');

dotenv.config();
const connectionString = process.env.MONGO_URL;

if (!connectionString) {
    console.log('Missing required environment variable in .env: MONGO_URL');
    process.exit(1);
}

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, () => {
    console.log('connected to database');
});

// logging middleware
app.use(morgan('dev'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Add routing middleware here
app.use('/reviews', reviewRoutes);

 // Route Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        response: "This is not the URL you are looking for!",
        status: 404
    })
})

app.listen(3000);