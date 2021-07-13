const express = require('express');
const connectDB = require('./config/db');

const app = express();

// db connection
connectDB();

// init middleware
app.use(express.json({extend: false}));

const PORT = process.env.PORT || 8000;

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// test route
app.get('/', (req,res)=>{
    res.json({msg: "You just hit ContactKeeper Home route"})
})



app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})



