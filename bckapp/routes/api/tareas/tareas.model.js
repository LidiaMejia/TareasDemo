const db = require('../../dao/db'); //Conexión a la Base de Datos

//Se exporta una clase que contiene métodos asíncronos para realizar las peticiones del CRUD a la Base
module.exports = class
{
    //Para las consultas en MySQL primero va: ( query, [El valor de los parámetros del query si es necesario] );

    //Obtener todas las tareas
    static async getTareas()
    {
        try
        {
            //Fecha formato 01-January-2020 para el mostrado
            let query = "SELECT id_tarea, titulo, descripcion, DATE_FORMAT(t.fecha, '%d-%M-%Y') fecha, id_tipo FROM tareas t ORDER BY t.fecha";
            const tareas = await db.query(query);
            return tareas;
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }

    //Obtener una tarea específica
    static async getTarea(id)
    {
        try
        {
            //Fecha formato 01-01-2020 para llenar el input type date
            let query = "SELECT id_tarea, titulo, descripcion, DATE_FORMAT(fecha, '%Y-%m-%d') fecha, id_tipo FROM tareas WHERE id_tarea = ?";
            const tarea = await db.query(query, [id]);
            
            if(tarea.length > 0)
            {
                return tarea[0];
            }

            return "La tarea no existe";
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }

    //Obtener Tipos de Tarea
    static async getTipos()
    {
        try
        {   
            let query = "SELECT * FROM tipos_tareas";
            const tipos = await db.query(query);
            return tipos;
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }

    //Agregar una nueva tarea
    static async addTarea(newTarea)
    {
        try
        {
            let query = "INSERT INTO tareas SET ?";
            const result = await db.query(query, [newTarea]);
            return result.insertId;
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }

    //Actualizar una tarea
    static async updateTarea(id, tarea)
    {
        try
        {
            let query = "UPDATE tareas SET ? WHERE id_tarea = ?";
            const result = await db.query(query, [tarea, id]);
            return result;
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }

    //Borrar una tarea
    static async deleteTarea(id)
    {
        try
        {
            let query = "DELETE FROM tareas WHERE id_tarea = ?";
            const result = await db.query(query, [id]);
            return result;
        }
        catch(err)
        {
            console.log(err);
            return err;
        }
    }
}