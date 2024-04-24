
const express = require('express');

const router = express.Router();
const UserController = require('../controllers/userController');
const ReviewController = require('../controllers/reviewController');
const authRoutes = require('../controllers/authController');
const authController = require('../controllers/authController');
const OrderItemController = require('../controllers/orderItemController');
const ProductController = require('../controllers/productController');
const WishlistController = require('../controllers/wishlistController');
const OrderController = require('../controllers/orderController');
const authorize=require('../middleware/authorizeMiddleware');  
const {verifyToken,verifyAdminToken,} = require("../middleware/authMiddleware");
const paginate=require("../middleware/pagination");

//superadmin 


//admim realted routes ---------------------------------------------
//user routes  
router.get('/v1/admin/users', verifyAdminToken, UserController.getUsers);
router.delete('/v1/admin/users/:userId', verifyAdminToken, UserController.deleteUser);
//product routes
router.post('/v1/admin/products', verifyAdminToken, ProductController.createProduct);
router.put('/v1/admin/products/:productId', verifyAdminToken, ProductController.updateProduct);
router.delete('/v1/admin/products/:productId', verifyAdminToken, ProductController.deleteProduct);
//order
router.delete('/v1/admin/orders/:orderId', verifyAdminToken, OrderController.deleteOrder);
router.get('/v1/admin/orders', verifyAdminToken, OrderController.getOrders);

//user related routes-----------------------------------------------

router.post('/v1/users/register', authController.registerUser); // resgisteruser
router.post('/v1/users/sign-in', authController.signInUser);
router.get('/v1/users/:userId', verifyToken, UserController.getUserById);
router.put('/v1/users/:userId', verifyToken, UserController.updateUser);
router.delete('/v1/users/:userId', verifyToken, UserController.deleteUser);

//product
router.get('/v1/products', paginate ,ProductController.getProducts);
router.get('/v1/products/:productId', ProductController.getProductById);


//wishlist

router.get('/v1/wishlist', verifyToken, WishlistController.getWishlist);
router.post('/v1/wishlist', verifyToken, WishlistController.addToWishlist);
router.delete('/v1/wishlist/:wishlistId', verifyToken, WishlistController.removeFromWishlist);

//orderitems
router.post('v1/orderItems', verifyToken,OrderItemController.getOrderItems);
//order

router.get('/v1/orders/:orderId', verifyToken, OrderController.getOrderById);
router.post('/v1/orders', verifyToken, OrderController.createorders);

//reviews
router.post('v1/reviews',verifyToken, ReviewController.getReviews);

//transaction




module.exports = router;   