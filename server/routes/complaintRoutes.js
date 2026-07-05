const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint,
} = require("../controllers/complaintController");

// Create Complaint
router.post("/", protect, createComplaint);

// Get Logged-in User Complaints
router.get("/my", protect, getMyComplaints);

// Get All Complaints
router.get("/", protect, getAllComplaints);

// Update Complaint Status
router.put("/:id", protect, updateComplaintStatus);

// Delete Complaint
router.delete("/:id", protect, deleteComplaint);

module.exports = router;