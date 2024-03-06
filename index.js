const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());




// import ya require kr rhe h saare routes ko 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const reviewRoutes = require('./routes/reviewRoutes');


//-----------------------------------routes only---
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', orderItemRoutes);
app.use('/api', reviewRoutes);

// Start the server
app.get ("/",async(req, res)=> {
    try {
      
      res.send("Everything is fine ");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});