const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    text : {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Recipe',RecipeSchema)