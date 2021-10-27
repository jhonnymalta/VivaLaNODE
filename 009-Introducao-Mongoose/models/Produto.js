const mongoose = require('mongoose');
const { Schema } = mongoose

const Produto = mongoose.model(
    'Produto',
    new Schema({
        name: { type: String, required: true },
        preco: { type: Number, required: true },
        descricao: { type: String, required: true },
        image: { type: String, required: true }
    })
)

module.exports = Produto