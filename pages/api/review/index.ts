import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/review
// Required fields in body: movieName, dateWatched
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { movieName, dateWatched, rating, review } = req.body
  const result = await prisma.review.create({
    data: {
      userId: 1,
      movieName,
      dateWatched,
      rating,
      review,
    },
  })
  return res.status(201).json(result)
}
