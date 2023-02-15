const express = require('express');
const router = express.Router();

//aqui van las rutas a exportar
const { query2 } = require('../queries/query2.js');
router.get('/query2', query2);

module.exports = router;