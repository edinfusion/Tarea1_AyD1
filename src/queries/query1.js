//aqui van las consultas
exports.query1 = async (req, res) => {
    try {
        //ruta para sumar dos valores
        var valor1 = req.body.valor1;
        var valor2 = req.body.valor2;
        if (valor1 == null || valor2 == null || typeof valor1 !== 'number' || typeof valor2 !== 'number') {
            res.status(400).json({ error: "Faltan datos/valores deben ser solo numericos" });
        }
        var resultado = valor1 * valor2;
        res.status(200).json({ resultado: resultado });
    } catch (err) {
        console.error(err.message);
    }
}
