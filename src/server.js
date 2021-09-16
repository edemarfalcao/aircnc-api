const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express(); 

mongoose.connect('mongodb+srv://edemafalcao:cR7rxa7xDx9IHqHp@ominstack.jewmg.mongodb.net/bancodedados?retryWrites=true&w=majority',

)
// req.query =  acessar os query params
//re.params = acessar rout params 
//req.body acessar corpo da requisição 
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333); 