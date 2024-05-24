'use strict'

//Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');


//Middlewares 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS -- acceso cruzado entre dominios
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Añadir prefijos a rutas / Cgargar rutas
app.use('/api', article_routes)

//Ruta o metodo de prueba para el API REST
/*
app.post('/datos-curso', (req, res) =>{
    var hola = req.body.hola;
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Valentin',
        url: 'valentin.com',
        hola
    });
});
*/

//Exportar modulo (fichero actual)
module.exports = app;