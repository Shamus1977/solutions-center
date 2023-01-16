const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getUser} = require("../controllers/userControllers");
const { protectRoute } = require("../middleware/authMiddleware");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/user", protectRoute, getUser);



module.exports = router;