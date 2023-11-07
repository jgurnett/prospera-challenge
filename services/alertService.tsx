import React, { useState } from 'react'
import CustomAlert from '@/components/alerts'
import { AlertColor } from '@mui/material'

interface AlertServiceInterface {
  showAlert: (message: string, severity?: AlertColor) => void
  closeAlert: () => void
  AlertComponent: React.ReactNode
}

export default function AlertService(): AlertServiceInterface {
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('info')

  function showAlert(message: string, severity: AlertColor = 'info') {
    setAlertMessage(message)
    setAlertSeverity(severity)
    setAlertOpen(true)
  }

  function closeAlert() {
    setAlertOpen(false)
    setAlertMessage('')
    setAlertSeverity('info')
  }

  return {
    showAlert,
    closeAlert,
    AlertComponent: (
      <CustomAlert
        open={alertOpen}
        message={alertMessage}
        severity={alertSeverity}
        onClose={closeAlert}
      />
    ),
  }
}
