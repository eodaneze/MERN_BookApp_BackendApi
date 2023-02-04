import express from "express";
import User from "../models/bookModel.js";
const router = express.Router();

// adding book to database
router.post("/addBook", async (req, res) => {
  const { title, desc, cover, price } = req.body;
  try {
    const user = await User({
      title,
      desc,
      cover,
      price,
    });
    const data = await user.save();
    if (user) {
      res.json({
        status: "SUCCESS",
        message: "Book added successfully",
        result: data,
      });
    } else {
      res.json({
        status: "FAILED",
        message: "Book Failed to add",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
// getting all books
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

// updating a book

router.put("/updatabook/:id", async (req, res) => {
  const { id } = req.params;
  const getBody = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, getBody, { new: true });
    if (user) {
      res.json({
        status: "SUCCESS",
        message: "Book updated successfully",
        result: user,
      });
    } else {
      res.json({
        status: "FAILED",
        message: "Failed to update book",
      });
    }
  } catch (err) {
    console.log(err);
  }
});


// deleting a book

router.delete("/deletebook/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.json({
        status: "SUCCESS",
        message: "Book deleted successfully",
      });
    } else {
      res.json({
        status: "FAILED",
        message: "Failed to delete book",
      });
    }
  } catch (err) {
    console.log(err);
  }
})
export default router;
