const express = require("express");
const router = express.Router()
const {getIssue, getIssues, createIssue, 
    deleteIssue, updateIssue} = require("../controllers/issueController");
const {protectRoute} = require("../middleware/authMiddleware");

router.route("/")
    .get(protectRoute, getIssues)
    .post(protectRoute, createIssue);

router.route("/:id")
    .get(protectRoute, getIssue)
    .delete(protectRoute, deleteIssue)
    .put(protectRoute, updateIssue);

module.exports = router;
