import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const postId = req.query.id

	switch (req.method) {
		case 'CREATE':
			return // CRUD para criar
		case 'GET':
			return // CRUD para recuperar

		default:
			throw new Error(`The HTTP ${req.method} method is not supported at this route.`,)
	}
}