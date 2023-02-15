const express = require('express');
const morgan = require('morgan');
const app = express();

//configuraciones
app.set('port', 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api", require("./routes/ruta1.js"));//post
app.use("/api", require("./routes/ruta2.js"));//get

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
