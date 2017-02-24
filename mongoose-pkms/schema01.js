const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instaagram');

const Schema = mongoose.Schema;
//Cria��o do Schema
const pokemonSchema = new Schema({
	name: String,
	description: String,
	type: String,
	attack: Number,
	defense: Number,
	height: Number
});

console.log('Schema', pokemonSchema);