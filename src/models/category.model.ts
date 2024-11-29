import { Category } from "@prisma/client";

export type CategoryResponse = {
    name: string;
    desctiption?: string;
}

export function toCategoryResponse(category: Category): CategoryResponse {
    return {
        name: category.name,
        desctiption: category.description ?? "",
    }
}