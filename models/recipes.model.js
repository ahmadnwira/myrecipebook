import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: String,
    isFeatured: {
        type: Boolean,
        default: false
    },
    ingredients: [],
    steps: [{description: String, order: Number}]
    // user reference
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;