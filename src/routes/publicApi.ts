import express from "express";
import { UserController } from "../controllers/user.controller";
import { CategoryController } from "../controllers/category.controller";

export const publicRoutes = express.Router();

publicRoutes.post('/users/register', UserController.register);
publicRoutes.post('/users/auth', UserController.login);

publicRoutes.get('/categories', CategoryController.get);
// publicRoutes.post('/categories', CategoryController.add);