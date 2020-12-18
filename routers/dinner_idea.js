const express = require('express');
const router = express.Router();

const {
    list,
    showForm,
    processForm
} = require('../controllers/dinner_idea');

router
    .get('/', list)
    .get('/new', showForm)
    .post('/new', processForm)

module.exports = router;