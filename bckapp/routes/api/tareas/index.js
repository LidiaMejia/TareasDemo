const express = require('express');
let router = express.Router();

const model = require('./tareas.model');

router.get('/getTareas', async (req, res)=>{
    try
    {
        const tareas = await model.getTareas();
        res.status(200).json(tareas);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({"ERROR":"Algo salio mal con el servidor"});
    }
}); //GET /getTareas


router.get('/getTarea/:id', async (req, res)=>{
    try
    {
        let {id} = req.params;
        const tarea = await model.getTarea(id);
        res.status(200).json(tarea);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ "ERROR": "Algo salio mal con el servidor" });
    }
}); //GET /getTarea/:id


router.get('/getTipos', async (req, res)=>{
    try
    {
        const tipos = await model.getTipos();
        res.status(200).json(tipos);
    } 
    catch(err)
    {
        console.log(err);
        res.status(500).json({ "ERROR": "Algo salio mal con el servidor" });
    }
}); //GET /getTipos


router.post('/addTarea', async (req, res)=>{
    try
    {
        let newTarea = req.body;
        const result = await model.addTarea(newTarea);
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({"ERROR":"Algo salio mal con el servidor"});
    }
}); //POST /addTarea


router.put('/updateTarea/:id', async(req, res)=>{
    try
    {
        let tarea = req.body;
        let {id} = req.params;
        const result = await model.updateTarea(id, tarea);
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({"ERROR":"Algo salio mal con el servidor"});
    }
}); //PUT /updateTarea/:id


router.delete('/deleteTarea/:id', async (req, res)=>{
    try
    {
        let {id} = req.params;
        const result = await model.deleteTarea(id);
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ "ERROR": "Algo salio mal con el servidor" });
    }
}); //DELETE /deleteTarea/:id


module.exports = router;