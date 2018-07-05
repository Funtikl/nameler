const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = express();


let selectAll = 'SELECT * FROM nameler';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sanmsung793',
  database : 'namedb'
})

connection.connect(()=>{
	console.log('ready');
})

app.get('/', (req, res)=>{
	res.send("Hello world");
})

const port = 8000; 

app.listen(port, ()=>{
	console.log('Server starts on port 8000');
})