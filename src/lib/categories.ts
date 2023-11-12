import { prisma } from "../../prisma/prisma";

export async function getCategs(categoryId: number) {
	const categories = await prisma.category.findUnique({
        where: {
            id: categoryId
        }
    });
	return categories;
}
