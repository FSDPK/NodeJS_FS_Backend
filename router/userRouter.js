const express = require("express");
const router = express.Router();

// http://localhost:3001/users
router.post("/register", (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: "Successful - POST",
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3001/users
router.post("/login", (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: "Successful - POST",
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
