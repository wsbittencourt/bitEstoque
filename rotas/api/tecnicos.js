const express = require('express');
const router = express.Router();

router.get('/teste', (req, res) => res.json({nivel: 'Técnico 1'}));

module.exports = router;