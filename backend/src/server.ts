import express, { Request, Response } from 'express';
import cors from "cors"
import bodyParser from "body-parser"
const db= require('./../config/db')
import apartmentRouter from './routes/apartmentRoutes';

const app: express.Application = express()
const port = 5000;


app.use(cors());

app.use(bodyParser.json())

db.connectDB()
db.seedDB()

app.use('/api/apartments', apartmentRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Nawyha app');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});