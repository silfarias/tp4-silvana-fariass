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


// Rutas
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
app.listen(4000, () => {
    console.log("server running on port", 4000);
});