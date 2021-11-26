require('dotenv').config();
import './paths'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from '@Configs/mongoose';
import Logger from '@Configs/Logger';
import router from '@Routes/index.routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
connectDB();

router(app);

app.listen(PORT, () => {
    Logger.success(`Server is running on: http://localhost:${PORT}`);
});
