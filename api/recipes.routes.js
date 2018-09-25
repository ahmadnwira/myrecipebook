import { Router } from 'express';
import * as recipeController from '../controllers/recipes.controller';

export const recipesRouter = Router();

recipesRouter.get('/', recipeController.index);

recipesRouter.post('/', recipeController.store);

recipesRouter.get('/:id', recipeController.show);

recipesRouter.put('/:id', recipeController.update);

recipesRouter.delete('/:id', recipeController.destroy);

recipesRouter.get('/featured', recipeController.featured);