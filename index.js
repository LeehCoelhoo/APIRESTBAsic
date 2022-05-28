const express = require('express');
const bodyParser = require('body-parser');
const testController = require('./controllers/TestController');
//Conectando o banco de dados
const mongoose = require ('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://LeehCoelhoo:queroformar0@cluster0.45c0b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
}
);

const app = express(); // permite a criação das sub urls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//adicionar usuario
const userController = require ('./controllers/UserController');
app.post('/user', userController.store);
//lista user
app.get('/user', userController.show);
//lista user filtrando por email
//https://apirestbasic.leehcoelhoo.repl.co/user/busca/?email=leticia@gmail.com
app.get('/user/busca/*', userController.index);

app.get('/usercontroller',testController.show);
// excluir user
//req.params = route params (post, put, delete)
app.delete('/user/:id', userController.destroy);

//alterar user
app.put('/user/:id', userController.update);


app.get('/', (req, res) => {
	res.send('Alô REST API');
});


app.get('/api/echo/:param*', (req, res) => {
	res.send(req.params.param);
});

app.get('/api/echodbl/:param1/:param2', (req, res) => {
	res.send(req.params.param1 + ', ' + req.params.param2);
});

app.get('/api/echoquery/*', (req, res) => {
	res.send(req.query.q);
});

app.get('/api', (req, res) => {
	res.send('API ativa !!!');  
});

const users = [
  {name: 'Jones', email: 'jones@gmail.com'},
  {name: 'Henrique', email: 'henrique@hotmail.com'}
]

app.get('/users', (req, res) => {
	res.json(users);
});

app.post('/api/echobody', ( req,res) => {
  res.send(req.body);
});


app.listen(3000, () => console.log('server started'));


// https://reqbin.com/
