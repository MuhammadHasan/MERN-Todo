const express = require('express');
const mongoose = require('mongoose');

const config = require('config');

const app = express();

// body parser middleware
app.use(express.json());

// db config
const db = config.get('mongoURI');

// connect to mongodb
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected ...'))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))