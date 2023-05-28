const express = require('express');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');
const connectDB = require('./config/db')
const app = express();
const port = process.env.PORT || 5000

connectDB()


app.use(express.json());
app.use(express.urlencoded({extended:false}))
// route

app.use('/api/goals',require('./routes/goalRouter'))
app.use(errorHandler)
app.listen(port,()=>{
console.log(`🚀 Server created and running on port ${port}
`)
})