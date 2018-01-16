const express = require('express');
const itemController = require('../controllers/item-controller');
const itemRouter = express.Router();

itemRouter.get('/', itemController.index)
itemRouter.get('/new', itemController.new)
itemRouter.get('/:id', itemController.edit)
itemRouter.put('/:id', itemController.update)
itemRouter.delete('/:id', itemController.destroy)
itemRouter.post('/', itemController.create)


module.exports = itemRouter;
