const express = require('express');
const router = express.Router();

router.get('/teste', (req, res) => res.json({nomeRota: 'BR 101 Norte'}));

module.exports = router;