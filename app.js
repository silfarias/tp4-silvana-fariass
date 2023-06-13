// Importar dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Crear instancia de Express
const app = express();

// Configurar middlewares
app.use(helmet());
app.use(cors())
app.use(morgan('tiny'));
app.use(express.json())

// Importar las Rutas
const routes = require('./routes/routers.js');
app.use(routes)

app.get('/get', (req, rest) => {
    rest.send('Esta es la ruta get')
})
app.post('/post', (req, rest) => {
    rest.send('Esta es la ruta post')
})
app.put('/put', (req, rest) => {
    rest.send('Esta es la ruta put')
})
app.delete('/delete', (req, rest) => {
    rest.send('Esta es la ruta delete')
})

// Iniciar el servidor
//Cambié al puerto 3000 porque el puerto 6000 no funcionaba correctamente
app.listen(3000, () => {
    console.log("server running on port", 3000);
});