const express = require('express');
const router = express.Router();

//aqui van las rutas a exportar
const { query1 } = require('../queries/query1.js');
router.post('/query1', query1);

module.exports = router;