import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await CategoryService.getAll();
            res.status(201).json({
                success: true,
                message: "Success fetching all categories",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }

    // static async add(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const result = await CategoryService.addCategory
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}