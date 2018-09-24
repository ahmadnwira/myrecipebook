import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: String,
    // ingredients: [],
    // steps: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'steps'
    // }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;