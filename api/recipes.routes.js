import { Router } from 'express';
import uploader from '../lib/middleware/uploader';
import * as recipeController from '../controllers/recipes.controller';

export const recipesRouter = Router();

recipesRouter.get('/', recipeController.index);

recipesRouter.post('/', uploader, recipeController.store);

recipesRouter.get('/:id', recipeController.show);

recipesRouter.put('/:id', recipeController.update);

recipesRouter.delete('/:id', recipeController.destroy);

recipesRouter.get('/featured', recipeController.featured);