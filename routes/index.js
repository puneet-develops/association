
const express = require('express');

const router = express.Router();
const verifyToken = require('../middleware/authMiddleware'); // Ensure the correct path
const UserController = require('../controllers/userController');
const ReviewController = require('../controllers/reviewController');
const authRoutes = require('../controllers/authController');
const authController = require('../controllers/authController');
const OrderItemController = require('../controllers/orderItemController');
const ProductController = require('../controllers/productController');
const WishlistController = require('../controllers/wishlistController');
const OrderController = require('../controllers/orderController');
const authorize=require('../middleware/authorizeMiddleware');  


//user related routes

router.post('/users', verifyToken,UserController.getUsers);
router.post('/users/:userId',verifyToken, UserController.getUserById);

//product
router.get('/products',ProductController.getProducts);
router.get('/products/:productId', ProductController.getProductById);
//wishlist
router.post('/wishlist', verifyToken,WishlistController.getWishlist);

//orderitems
router.post('/orderItems', verifyToken,OrderItemController.getOrderItems);
//order
router.post('/orders/:orderId',verifyToken, OrderController.getOrderById);
//reviews
router.post('/reviews',verifyToken, ReviewController.getReviews);
//authroutes
router.post('/sign-up', authController.registerUser);  
router.post('/sign-in', authController.signInUser);
//transaction
router.post('/order', verifyToken, OrderController.orders);
router.post('/addwishlist', verifyToken, WishlistController.addToWishlist);


module.exports = router;   