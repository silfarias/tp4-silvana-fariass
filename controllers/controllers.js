//Controladores

exports.getController = (req, res) => {
    res.send('GET request received');
}
exports.postController = (req, res) => {
    res.send('POST request received');
}
exports.putController = (req, res) => {
    res.send('PUT request received');
}
exports.deleteController = (req, res) => {
    res.send('DELTE request received');
}