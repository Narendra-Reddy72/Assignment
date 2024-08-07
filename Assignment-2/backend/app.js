const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')
const app = express();

app.use(express.json());

app.use(cors())

connectDB();

app.use('/api/todo',todoRoutes);

module.exports = app
