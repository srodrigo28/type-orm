import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source'

const app = express();

app.use(cors());

app.use(express.json())

AppDataSource.initialize().then(async () => {
    console.log('Database success')
    app.listen(3332, () => {
        console.log('Server is Online! porta 3332')
    })
})