const express = require ('express');
const connect = require('./config/db');
const mongoose = require('mongoose');
const todoRoutes = require('./Routes/todoRoutes');
const app =express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.port ||80;

connect();

app.use(cors());

app.use(express.json());

app.use('/api',todoRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})