// includes
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();

// middleware
app.use(express.json());

// database connection
const dbURI =
    'mongodb+srv://omarsaad08:411444291@cluster0.lubh9dn.mongodb.net/hr-management-system?retryWrites=true&w=majority&appName=Cluster0';
mongoose
    .connect(dbURI)
    .then((result) => {
        app.listen(3000);
        console.log('connected and listening :)');
    })
    .catch((e) => console.log(e));
// routes
app.use(authRoutes);
