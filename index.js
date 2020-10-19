const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user_panda:R5b9paxO5C1IeVgl@cluster0.1ga8x.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true},  
() => console.log('DB Connected!'));

//import routes
const authRouter = require('./routes/auth');

//Route Middleware 
app.use('/api/user', authRouter);

const port = process.env.Port || 3000
app.listen(port, ()=> console.log(`App is listening on port ${port}`));
//console.log('listening port 3000')