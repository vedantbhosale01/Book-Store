const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const {isLoggedIn}=require("../middleware.js");
router.post('/createOrder/:id',isLoggedIn, paymentController.createOrder); // To create the Razorpay order
router.post('/capturePayment',isLoggedIn, paymentController.capturePayment); // To capture the payment

module.exports = router;
