const express =require('express');
const mongoose=require('mongoose');
const dotEnv = require('dotenv');
const empRoute=require('./Routes/empRoutes');
const bodyParser=require('body-parser');
const cors=require('cors');

dotEnv.config();
const app=express();
app.use(bodyParser.json());

app.use(cors(({origin:'http://localhost:5173',methods:['GET','POST','PUT','DELETE'],credentials:true}
)))


mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log("MongoDB connected successfully")})
.catch(error =>{console.log("MongoDB connection failed",error);})

app.use('/api',empRoute);

app.listen(5000,() => {console.log('The server is running at 5000 port')})
