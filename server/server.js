require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Middlewares - */

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-wwww-form-urlencoded
app.use(bodyParser.json()); //parse application(json)


app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json({
        persona: body
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json(
        id
    );
});

app.delete('/usuario/:id', function(req, res) {
    res.json('delete ususrio');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})