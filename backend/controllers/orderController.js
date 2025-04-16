import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from "razorpay";

// 🔐 Razorpay Instance
const createRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_SECRET,
  });
};

// 🚀 Place Order Controller
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, deliveryCharge = 0 } = req.body;

    if (!userId || !items?.length || !amount || !address) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields for placing an order.",
      });
    }

    // 💾 Create new order in DB
    const newOrder = await orderModel.create({
      userId,
      items,
      amount: amount,
      address,
    });

    // 🧹 Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // 📦 Create Razorpay order
    const razorpay = createRazorpayInstance();
    const options = {
      amount: amount * 100, // INR -> paise
      currency: "INR",
      receipt: `receipt_order_${newOrder._id}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // 📤 Send back data to frontend
    return res.status(200).json({
      success: true,
      message: "Order created successfully",
      razorpayOrder,
      mongoOrderId: newOrder._id,
    });
  } catch (error) {
    console.error("💥 Order placement failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during order placement.",
    });
  }
};

// Placing User Order for Frontend using stripe
const placeOrderCod = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: true,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Listing Order for Admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// User Orders for Frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const updateStatus = async (req, res) => {
  console.log(req.body);
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    res.json({ success: false, message: "Not  Verified" });
  }
};

export {
  placeOrder,
  listOrders,
  userOrders,
  updateStatus,
  verifyOrder,
  placeOrderCod,
};
