import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  getOrders,
  intent,
  confirm,
  createOrderForCash,
  complete,
} from "../controllers/order.controller.js";

const router = express.Router();

//router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/complete", verifyToken, complete);

router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);
router.post("/paybycash/:id", verifyToken, createOrderForCash);

export default router;
