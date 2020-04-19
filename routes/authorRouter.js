const express = require('express');
// add our router
const authorRouter = express.Router();
// require the author controller
const authorController = require('../controllers/authorController.js');
// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));
authorRouter.get('/:id', (req,res) => authorController.getAuthorByID(req,res));
authorRouter.post('/new', (req,res) => authorController.addAuthor(req,res));
authorRouter.post('/mod', (req,res) => authorController.modifyAuthor(req,res));
// export the router
module.exports = authorRouter;