const {Router} = require("express")
const { getRecipe, addRecipe, deleteRecipe, updateRecipe } = require("../controllers/recipeController")


const router = Router()

router.get('/',getRecipe)
router.post('/add',addRecipe)
router.post('/delete',deleteRecipe)
router.post("/update",updateRecipe)

module.exports = router;