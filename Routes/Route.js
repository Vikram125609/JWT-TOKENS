const express = require("express");
const Auth = require("../Controller/Auth/Auth");
const Home = require("../Controller/Render/Home");
const router = express.Router();
router.get('/', Home().index);
router.post('/', Auth().register);
router.post('/:id',Auth().login);
module.exports = router;