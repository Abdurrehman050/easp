import express from "express";
import { createCat, getCat, deleteCat } from "../controllers/cat.controller.js";

const router = express.Router();

// Create a new category
router.post("/", createCat);

// Get all categories
router.get("/", getCat);

// Delete a category by ID
router.delete("/:id", deleteCat);

export default router;
