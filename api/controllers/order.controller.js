import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import Stripe from "stripe";
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "pkr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const createOrderForCash = async (req, res, next) => {
  const gig = await Gig.findById(req.params.id);

  try {
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_cash: "cash payment details here",
    });

    await newOrder.save();
    res.status(200).send("Successful");
  } catch (err) {
    next(err);
  }
};
export const complete = async (req, res, next) => {
  try {
    const { orderId, isCompleted } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, {
      isCompleted,
    });

    if (!order) {
      return res.status(404).send("Order not found");
    }

    res.status(200).send("Order status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
export const confirm = async (req, res, next) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, {
      isCompleted: true,
    });

    if (!order) {
      return res.status(404).send("Order not found");
    }

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
