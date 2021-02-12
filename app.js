const express = require('express');
const bodyParser = require("body-parser");
// Valami

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// Index
app.get('/', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Content-Type', 'application/json');
	var output='{ "id":"3", "title":"This is a title", "body":"This is a body" }';
	//res.send(output);
	setTimeout(()=>{
		res.send(output);
		console.log("Output Sent");
	}, 2000);
});

app.get('/fast', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Content-Type', 'application/json');
	var output='{ "id":"0", "title":"This is fast", "body":"Fast response from REST API" }';
	res.send(output);
});
app.get('/first', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Content-Type', 'application/json');
	var output='{ "id":"1", "title":"First Title", "body":"First body" }';
	//res.send(output);
	setTimeout(()=>{
		res.send(output);
		console.log("Output Sent");
	}, 2000);
});
app.get('/second', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Content-Type', 'application/json');
	var output='{ "id":"2", "title":"Second Title", "body":"Second body" }';
	//res.send(output);
	setTimeout(()=>{
		res.send(output);
		console.log("Output Sent");
	}, 2000);
});

//**************************************************
// /TUTORIAL EXAMPLE 

app.listen('3000', () => {
	console.log('Server started on port 3000');
});
