'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser:true})
.then(() =>{ //mongoose.connect(url, opciones).then(() =>{
    console.log('La CONEXION a la base de datos se ha realizado correctamente!!!');

    //Crear servidor y escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('SERVIDOR corriendo en http://localhost:'+port);
    });
});