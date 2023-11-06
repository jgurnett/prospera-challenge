'use client'
import { DashboardRoutes } from '@/enums/routes'
import { getData, LocalStorageKeys, removeData } from '@/utils/localStorage'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ComponentText {
  body: string
  button: string
}

export default function ApplicationForm() {
  const [resume, setResume] = useState(false)
  const [componentText, setComponentText] = useState<ComponentText>({
    body: 'You have made it to the application flow!',
    button: 'Start application!',
  })
  const router = useRouter()

  useEffect(() => {
    const results = getData(LocalStorageKeys.APPLICATION_DATA)
    const enableContinue = results?.id ? true : false
    setResume(enableContinue)

    const componentText = {
      body: enableContinue
        ? 'You already have an application in the works, would you like to continue?'
        : 'You have made it to the application flow!',
      button: enableContinue ? 'Continue application!' : 'Start application!',
    }
    setComponentText(componentText)
  }, [])

  function startNew() {
    removeData(LocalStorageKeys.APPLICATION_DATA)
    nextStep()
  }

  function nextStep() {
    router.push(DashboardRoutes.APPLICATION_FORM + '/' + DashboardRoutes.STEP1)
  }

  return (
    <div>
      <p>{componentText?.body}</p>
      <br />
      <div className="flex text-center gap-2">
        {resume ? (
          <Button
            variant="contained"
            style={{ backgroundColor: '#e65100' }}
            onClick={startNew}
          >
            New Application
          </Button>
        ) : null}
        <Button
          variant="contained"
          style={{ backgroundColor: '#1A76D2' }}
          onClick={nextStep}
        >
          {componentText?.button}
        </Button>
      </div>
    </div>
  )
}
