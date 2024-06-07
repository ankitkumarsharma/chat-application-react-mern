import express from 'express';
import { config } from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app = express();
config();
const PORT = process.env.PORT || 5000;
app.get('/', (req,res)=>{
    res.send("We are making A realtime chat application!");
});

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});