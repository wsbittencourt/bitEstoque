const express = require('express');
const router = express.Router();

router.get('/teste', (req, res) => res.json({nome: 'Wagner'}));

module.exports = router;