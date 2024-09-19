// const express = require ('express')
// import * as express from 'express'
// El mensaje de res se verá en el cliente.
import express from 'express'
let app = express()

// GET POST DELETE PUT
app.get('/', saludar)


// Ahora nos conectamos a localhost:3000, nos saldrá el mensaje de Hola chicos y chicas, que se conecta
// al servidor
function saludar(req, res) {
    console.log('El cliente se conecto')
    res.send('Hola chicos y chicas')
}

app.listen(3000)