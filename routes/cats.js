const express = require('express');
const catsController = require('../controller/cats.js');

const catsRouter = express.Router()

catsRouter.post('/', catsController.postCats)

module.exports = artistRouter;