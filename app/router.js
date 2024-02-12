const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const searchController = require("./controllers/searchController");

router.get("/", mainController.homePage);
router.get("/card/:id", mainController.getOneCard);
router.get("/search", searchController.searchPage);
router.post("/search/:element", searchController.SearchElement);
router.get("/search/:element", searchController.SearchElement);

module.exports = router;
