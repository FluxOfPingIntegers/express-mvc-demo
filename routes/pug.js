const path = require('path');

const express = require('express');

// importing our controller actions
const pugController = require('../controllers/pugs');

// creating router object
const router = express.Router();

// /pugs/new => GET
router.get('/new', pugController.getAddPug);

// /pugs/ => GET
router.get('/', pugController.getPugs);

// /pugs/create => POST
router.post('/create', pugController.postAddPug);

// exporting router object containing our controller actions
module.exports = router;

