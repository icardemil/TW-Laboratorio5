var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {   titulo: 'Titulo página',
                            tituloJumbotron:'AA1',
                            contenidoPanel1: 'AAA1',
                            contenidoPanel2: 'AAA2',
                            contenidoPanel3: 'AAA3',
                            textoJumbotron: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo hendrerit lacus. Duis vel sem efficitur, consectetur sem eu, feugiat metus. Cras eros odio, consectetur eget tortor in, commodo placerat leo. Integer dapibus, tellus eget posuere efficitur, eros dui luctus odio, eget rutrum est massa ac dolor. Proin vel aliquet. '});
 
});
app.get('/2', function (req, res) {
    res.render('index', {   titulo: 'Título página',
                            tituloJumbotron:'BB1',
                            contenidoPanel1: 'BBB1',
                            contenidoPanel2: 'BBB2',
                            contenidoPanel3: 'BBB3',
                            textoJumbotron:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo hendrerit lacus. Duis vel sem efficitur, consectetur sem eu, feugiat metus. Cras eros odio, consectetur eget tortor in, commodo placerat leo. Integer dapibus, tellus eget posuere efficitur, eros dui luctus odio, eget rutrum est massa ac dolor. Proin vel aliquet.'});
 
});
app.get('/3', function (req, res) {
    res.render('index', {   titulo: 'Título página',
                            tituloJumbotron:'CC1',
                            contenidoPanel1: 'CCC1',
                            contenidoPanel2: 'CCC2',
                            contenidoPanel3: 'CCC3',
                            textoJumbotron:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo hendrerit lacus. Duis vel sem efficitur, consectetur sem eu, feugiat metus. Cras eros odio, consectetur eget tortor in, commodo placerat leo. Integer dapibus, tellus eget posuere efficitur, eros dui luctus odio, eget rutrum est massa ac dolor. Proin vel aliquet. '});
});
 
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});