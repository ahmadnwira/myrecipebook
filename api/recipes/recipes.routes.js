import { Router } from 'express';
import * as controller from './recipes.controller';

export const recipesRouter = Router();

recipesRouter.get('/', controller.index);

recipesRouter.get('/featured', controller.featured);

recipesRouter.get('/save', controller.add);

recipesRouter.get('/:id', controller.show);