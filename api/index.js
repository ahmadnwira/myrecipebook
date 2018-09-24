import express from 'express';
import { recipesRouter } from './recipes/recipes.routes';

const router = express.Router();

router.use('/recipe', recipesRouter);

router.get('/user/recipes', (req, res) => {
    /* if loggedIn */
    res.send([
        {imgUrl: 'pic.jpg', title:'Title-1', _id:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title-2', _id:'/recipe-title'},
    ]);
});

export default router;