const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    created_at: {type: Date, default: Date.now}
}

const pokemonSchema = new Schema(_schema);
const data = {};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function(err, data){
    if (err) {
        return console.log('ERRO: ', err);
    }
    console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;