import express, { NextFunction, Request, response, Response } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv = require('dotenv');
import reviewRoutes from './routes/reviewRoutes';

const app = express();
const cors = require('cors');

dotenv.config();
const connectionString = process.env.MONGO_URL ?? '';

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

// healthcheck
app.use('/', (req, res) => {
    res.status(200).json({ response: 'The app is running!', status: 200 });
});

 // Route Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        response: "This is not the URL you are looking for!",
        status: 404
    })
})

export default app.listen(3000, () => console.log('Server running on port 3000!'));