const RecipeModel = require("../models/recipeModel")

module.exports.getRecipe = async(req,res)=>{
    const recipe = await RecipeModel.find()
    res.send(recipe)
}

module.exports.addRecipe = async(req,res)=>{
    const {text} =req.body;
    RecipeModel
    .create({text})
    .then(()=>res.send("Added Succesfylly"))
    .catch((err)=>console.log(err))
}


module.exports.updateRecipe = async(req,res)=>{
    const{_id,text}=req.body
    RecipeModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated successfully"))
    .catch((err)=>console.log(err))
}

module.exports.deleteRecipe = async(req,res)=>{
    const {_id}=req.body
    RecipeModel
    .findByIdAndDelete(_id,text)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err))
}