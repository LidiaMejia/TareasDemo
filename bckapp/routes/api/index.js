//SUPERCONMUTADOR DE TODAS LAS RUTAS DE LA API

const express = require('express');
let router = express.Router();


let tareasRoutes = require('./tareas');

router.use('/tareas', tareasRoutes);


module.exports = router;
