import { prismaClient } from "../app/database";
import { ResponseError } from "../lib/error.response";
import { CategoryResponse, toCategoryResponse } from "../models/category.model";
import { CategoryValidation } from "../validation/category.validation";
import { Validation } from "../validation/validation";

export class CategoryService {
    static async getAll(): Promise<CategoryResponse> {
        const categories = await prismaClient.category.findFirst();

        if (!categories) {
            throw new ResponseError(200, "Data kosong");
        }

        return toCategoryResponse(categories);
    }

    // static async addCategory(request: AddCategoryRequest): Promise<AddCategoryResponse> {
    //     const AddCategoryRequest = Validation.validate(
    //         CategoryValidation.ALL,
    //         request
    //     )

    //     const add = await prismaClient.category.create({
    //         data: AddCategoryRequest
    //     });
    // }
}