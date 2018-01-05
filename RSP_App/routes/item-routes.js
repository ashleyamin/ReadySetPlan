const express = require('express');
const itemController = require('../controllers/item-controller');
const itemRouter = express.Router();

itemRouter.get('/', itemController.index)

module.exports = itemRouter;
