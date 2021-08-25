import express from 'express';
import './config/typeorm';
import cors from 'cors';
import AuthRouter from './router/AuthRouter';

import UserRouter from './router/UserRouter';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
    cors({
        origin: "http://localhost:4000",
        credentials: true
    })
);

app.use(cookieParser());

app.use(express.json());

app.use('/api', UserRouter);

app.use('/api', AuthRouter);

app.listen(4000, () => {
    try{
        console.log("Server Is Connection");
    } catch (err){
        console.log(err);
    }
});