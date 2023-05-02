const express = require("express");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");
const { getBookmark } = require("../queries/bookmarks");

const reviewsController = require("./reviewsController.js");
bookmarks.use("/:bookmarkId/reviews", reviewsController);

//INDEX
reviews.get("/", async (req, res) => {
  const { bookmarkId } = req.params; //req.params
  try {
    const allReviews = await getAllReviews(bookmarkId);
    res.json(allReviews)
  } catch (err) {
    res.json(err)
  }
});

//   const allReviews = await getAllReviews();
//   if (allReviews[0]) {
//     res.status(200).json(allReviews);
//   } else {
//     res.status(500).json({ error: "server error" });
//   }
// });

// SHOW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
reviews.post("/:id", async (req, res) => {
  try {
    const review = await createReview(req.body);
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  res.status(200).json(updatedReview);
});

module.exports = reviews;
