const express = require("express");
const cors=require('cors');
const dotenv=require('dotenv');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dotenv.config();



// import ya require kr rhe h saare routes ko 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes=require('./routes/authRoutes');


//-----------------------------------routes only---
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', orderItemRoutes);
app.use('/api', reviewRoutes);
app.use('/api', authRoutes);


// Start the server
app.get ("/",async(req, res)=> {
    try {
      
      res.send("Everything is fine ");
      console.log(process.env.PORT);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
const PORT = process.env.PORT ;
app.listen(PORT, (err) => {
  if(err){
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});