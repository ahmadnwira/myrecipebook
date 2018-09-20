import express from 'express';

const router = express.Router();

router.get('/recipe', (req, res) => {
    res.send([
        {imgUrl: 'pic.jpg', title:'Title-1', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title-2', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'}
    ]);
});

router.get('/recipe/featured', (req, res) => {
    res.send(
        {imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'}
    );
});

router.get('/recipe/:recipeId', (req, res) => {
    res.send(
        {
            title: 'Title', imgUrl:'pic.jpg', author:'author name',
            ingredients: ['ingredient-a', 'ingredient-b', 'ingredient-c'],
            steps: ['step-a', 'step-b', 'step-c']
        }
    );
});

router.get('/user/recipes', (req, res) => {
    /* if loggedIn */
    res.send([
        {imgUrl: 'pic.jpg', title:'Title-1', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title-2', url:'/recipe-title'},
    ]);
});

export default router;