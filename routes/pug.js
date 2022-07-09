const path = require('path');

const express = require('express');

const pugController = require('../controllers/pugs');

const router = express.Router();

// /pugs/new => GET
router.get('/new', pugController.getAddPug);

// /pugs/ => GET
router.get('/', pugController.getPugs);

// /pugs/create => POST
router.post('/create', pugController.postAddPug);

module.exports = router;