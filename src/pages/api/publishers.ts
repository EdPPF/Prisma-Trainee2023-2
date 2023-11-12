// /api/publishers.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prisma';

type Publisher = {
	id: number;
	name: string;
}[]

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Publisher | string>
) {
	if (req.method === 'GET') {
		try {
			const allPublishers = await prisma.publisher.findMany({
				include: {
					catalog: true,
				}
			});

			if (allPublishers) {
				res.status(200).json(allPublishers);
			} else {
				const message: string = 'Publisher não encontrada'
				res.status(404).json(message);
			}
		}
		catch (error) {
			const message: string = 'Erro ao buscar dados da publisher'
			res.status(500).json(message);
		}
		finally {
			await prisma.$disconnect();
		}
	}
}
