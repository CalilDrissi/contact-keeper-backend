const express = require('express');


const app = express();


const PORT = process.env.PORT || 8000;

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


app.get('/', (req,res)=>{
    res.send("this is sparta!!")
})



app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})



