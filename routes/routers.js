const express = require('express');
const router = express.Router();

// Importar los controladores
const {
    getController,
    postController,
    putController,
    deleteController
  } = require('../controllers/controllers.js');


router.get('/get', (req, rest) => {
    rest.send('Esta es la ruta get')
})
router.post('/post', (req, rest) => {
    rest.send('Esta es la ruta post')
})
router.put('/put', (req, rest) => {
    rest.send('Esta es la ruta put')
})
router.delete('/delete', (req, rest) => {
    rest.send('Esta es la ruta delete')
})

module.exports = router