import express from "express";
import { createCat, getCat } from "../controllers/cat.controller.js";

const router = express.Router();

// Create a new category
router.post("/", createCat);

// Get all categories
router.get("/", getCat);

// Delete a category by ID

export default router;
