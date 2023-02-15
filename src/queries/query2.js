//aqui van las consultas
exports.query2 = async (req, res) => {
    try {
        res.status(200).send("<h1>Hola primera tarea practica de AyD 1, Carnet - 201709311</h1>");

    } catch (err) {
        console.error(err.message);
    }
}