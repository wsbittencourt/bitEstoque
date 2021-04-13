const express = require('express');
const router = express.Router();

router.get('/teste', (req, res) => res.json({patrimonio: '01'}));

module.exports = router;