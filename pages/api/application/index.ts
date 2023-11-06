import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { ApplicationData } from '@/interfaces/applicationData'

// POST /api/application
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { companyName, name } = req.body
    const result = await prisma.application.create({
      data: {
        userId: 1,
        companyName,
        name,
      },
    })
    return res.status(201).json(result)
  } else if (req.method === 'PUT') {
    const result = updateApplication(req.body)
    return res.status(200).json(result)
  }
}

async function updateApplication(applicationData: ApplicationData) {
  const existingData = await getApplication(applicationData.id)
  return prisma.application.update({
    where: { id: applicationData.id },
    data: { ...existingData, ...applicationData },
  })
}

async function getApplication(id: number) {
  return await prisma.application.findUnique({ where: { id } })
}
