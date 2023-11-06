import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import prisma from '@/lib/prisma'

export default async function Applications() {
  const applications = await prisma.application.findMany({
    where: { userId: 1, submitted: true },
  })

  return (
    <div>
      {applications.map((application, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }}>
              {application.companyName}
            </Typography>
            {application?.approved ? (
              <p>Approved!</p>
            ) : (
              <p>Awaiting approval</p>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <b>Your name:</b> {application.name}
            </p>
            {application?.phoneNumber ? (
              <p>
                <b>Your phone number:</b> {application.phoneNumber}
              </p>
            ) : null}
            {application?.birthDate ? (
              <p>
                <b>Your birthday:</b> {application.birthDate.toDateString()}
              </p>
            ) : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
