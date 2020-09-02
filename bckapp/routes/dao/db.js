const mysql = require('mysql');                   //Librería de MySQL
const { parameters } =  require('./parameters');  //Parámetros de conexión
const { promisify } = require('util');            //Librería de Node.js para habilitar promesas en querys de MySQL

//Crear el espacio para asignar los parámetros de conexión
const con = mysql.createPool(parameters);

//Función para obtener la conexión
con.getConnection((err, connection)=>{
    if(err)
    {
        console.log("ERROR CONEXION BD: "+err);
        process.exit(1); //Parar la ejecución de la API
    }
    else
    {
        connection.release(); //Empezar a utilizar la conexión
        console.log("BD CONECTADA");
        return; //Salir de la función
    }
});

//Habilitar el uso de promesas al realizar consultas a la Base
con.query = promisify(con.query);

//Exportar la conexión
module.exports = con;