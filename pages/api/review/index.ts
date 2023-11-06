import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { MovieData } from '@/interfaces/movieData'

// POST /api/review
// Required fields in body: movieName, dateWatched
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
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
  } else if (req.method === 'PUT') {
    const result = updateReview(req.body)
    return res.status(200).json(result)
  }
}

async function updateReview(movieData: MovieData) {
  const existingData = await getReview(movieData.id)
  return prisma.review.update({
    where: { id: movieData.id },
    data: { ...existingData, ...movieData },
  })
}

async function getReview(id: number) {
  return await prisma.review.findUnique({ where: { id } })
}
