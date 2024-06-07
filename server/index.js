import express from 'express';
import { config } from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import connectWithMongoDb from './db/connectWithMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;

config();
app.use(express.urlencoded({ extended: true })); // for body- form urlencoded
app.use(express.json()); // for parse incoming payload with json encoding from req.body

app.get('/', (req, res) => {
    res.send("We are making A realtime chat application!");
});

app.use('/api/auth', authRoutes);

connectWithMongoDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});