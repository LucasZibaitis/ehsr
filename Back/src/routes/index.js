const { Router } = require("express");
const getRandomName = require("../controllers/getRandomName.js");
const postWord = require("../controllers/postWord.js");
const getAllWords = require("../controllers/getAllWords.js");
const getAllNames = require("../controllers/getAllNames.js");
const getAuthorName = require("../controllers/getAuthorName.js");
const postAuthorName = require("../controllers/postAuthorName.js");

const router = Router();

router.post("/word", postWord);
router.get("/words", getAllWords);
router.get("/randomName", getRandomName);
router.post("/authorName", postAuthorName);
router.get("/authorName", getAuthorName);
router.get("/names", getAllNames);

module.exports = router;
