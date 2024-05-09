const express = require('express');
const cors = require('cors')
const env = require('dotenv').config()
const userRouter = require('./routes/userRouter')


const app = express();

const allowedOrigin = 'https://videocalling-app-frontend.vercel.app'


const corsOptions = {
  origin: allowedOrigin,
  credentials: true, // Allow credentials (e.g., cookies)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://videocalling-app-frontend.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  

app.use('/',userRouter)

const port  = process.env.PORT || 5000 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})